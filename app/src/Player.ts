import * as PIXI from 'pixi.js';
import { Assets } from 'pixi.js';
import { Spritesheet, AnimatedSprite } from 'pixi.js';

// import { gsap } from "gsap";

import lpcNakedMeta from "@assets/spritesheet/lpc_naked.json";
import '../style.css'

export default class Player extends AnimatedSprite {

    public assets: Record<string | number, PIXI.Texture[]>;

    public static state = {
        animation: {
            current: 'walkRight',
            flags: {
                moveRight: false,
                moveLeft: false,
                moveUp: false,
                moveDown: false,
                isJump: false,
                jumpUp: false,
                jumpLeft: false,
                jumpDown: false,
                jumpRight: false,
            }
        }
    }

    public static async loadAssets() {
        const { lpcNaked: lpcNakedAsset } = await Assets.loadBundle('spritesheet');
        const spritesheet = new Spritesheet(lpcNakedAsset, <PIXI.SpritesheetData>lpcNakedMeta)

        spritesheet.parse();

        return spritesheet.animations;
    }

    constructor(animations: Record<string | number, PIXI.Texture[]>) {
        super(animations['walkRight']);

        this.assets = animations

        // gsap.to(this, {
        //     pixi: {
        //         x: this.x + 24 // Block Size
        //     }
        // });
    }

    public routine(deltaTime: number) {
        const speed: number = deltaTime / 10;

        if (Player.state.animation.flags.moveRight) {
            this.x += speed * 24

            if (this.playing === false) {
                this.textures = this.assets.walkRight;
                Player.state.animation.current = 'walkRight'
                this.animationSpeed = 0.35;
                this.play()
            }

        } else if (Player.state.animation.flags.moveLeft) {
            this.x -= speed * 24

            if (this.playing === false) {
                this.textures = this.assets.walkLeft;
                Player.state.animation.current = 'walkLeft'
                this.animationSpeed = 0.35;
                this.play()
            }

        } else if (Player.state.animation.flags.moveUp) {
            this.y -= speed * 24

            if (this.playing === false) {
                this.textures = this.assets.walkUp;
                Player.state.animation.current = 'walkUp'
                this.animationSpeed = 0.35;
                this.play()
            }

        } else if (Player.state.animation.flags.moveDown) {
            this.y += speed * 24

            if (this.playing === false) {
                this.textures = this.assets.walkDown;
                Player.state.animation.current = 'walkDown'
                this.animationSpeed = 0.35;
                this.play()
            }

        } else if (Player.state.animation.flags.isJump) {
            if (this.playing === false) {
                this.animationSpeed = 0.2;

                switch (Player.state.animation.current) {
                    case "walkRight": {
                        this.textures = this.assets.jumpRight;
                        break;
                    }
                    case "walkLeft": {
                        this.textures = this.assets.jumpLeft;
                        break;
                    }
                    case "walkUp": {
                        this.textures = this.assets.jumpUp;
                        break;
                    }
                    case "walkDown": {
                        this.textures = this.assets.jumpDown;
                        break;
                    }
                }

                this.play()

                setTimeout(() => {
                    Player.state.animation.flags.isJump = false
                    this.textures = this.assets[Player.state.animation.current];
                }, 400)
            }

        } else {
            this.stop()
            this.currentFrame = 0
        }
    }

}