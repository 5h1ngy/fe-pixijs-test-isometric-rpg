import * as PIXI from 'pixi.js';
import { Assets } from 'pixi.js';
import { Spritesheet, AnimatedSprite } from 'pixi.js';

// import { gsap } from "gsap";

import lpcNakedMeta from "@assets/spritesheet/lpc_naked.json";
import '../style.css'

export default class Player extends AnimatedSprite {

    public assets: Record<string | number, PIXI.Texture[]>;

    public routineArgs = {
        moveRight: false,
    }

    public static async loadAssets() {
        const { lpcNaked: lpcNakedAsset } = await Assets.loadBundle('spritesheet');
        const spritesheet = new Spritesheet(lpcNakedAsset, <PIXI.SpritesheetData>lpcNakedMeta)

        spritesheet.parse();

        return spritesheet.animations;
    }

    constructor(animations: Record<string | number, PIXI.Texture[]>) {
        super(animations.walkRight);

        this.assets = animations

        // gsap.to(this, {
        //     pixi: {
        //         x: this.x + 24 // Block Size
        //     }
        // });
    }

    public routine(deltaTime: number) {
        const speed: number = deltaTime / 10;

        if (this.routineArgs.moveRight) {
            if (this.playing === false) {
                this.textures = this.assets.walkRight;
                this.animationSpeed = 0.2;
                this.play()
            }
            this.x += speed * 24

        } else {
            this.stop()
        }
    }

}