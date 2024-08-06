import * as PIXI from 'pixi.js';
import { Application, Assets } from 'pixi.js';
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin";

import manifest from "@assets/manifest.json";

import Player from "./Player";
import '../style.css'

export default class Engine extends Application {

    private _bindKeyboard() {
        document.body.addEventListener('keydown', (event) => {
            switch (event.code) {
                case "KeyD": {
                    const sprite = this.stage.children.find(child => child instanceof Player)
                    if (sprite) {
                        Player.state.animation.flags.moveRight = true
                    }
                    break;
                }
                case "KeyA": {
                    const sprite = this.stage.children.find(child => child instanceof Player)
                    if (sprite) {
                        Player.state.animation.flags.moveLeft = true
                    }
                    break;
                }
                case "KeyW": {
                    const sprite = this.stage.children.find(child => child instanceof Player)
                    if (sprite) {
                        Player.state.animation.flags.moveUp = true
                    }
                    break;
                }
                case "KeyS": {
                    const sprite = this.stage.children.find(child => child instanceof Player)
                    if (sprite) {
                        Player.state.animation.flags.moveDown = true
                    }
                    break;
                }
                case "Space": {
                    const sprite = this.stage.children.find(child => child instanceof Player)
                    if (sprite) {
                        Player.state.animation.flags.isJump = true
                    }
                    break;
                }
            }
        })

        document.body.addEventListener('keyup', (event) => {
            switch (event.code) {
                case "KeyD": {
                    const sprite = this.stage.children.find(child => child instanceof Player)
                    if (sprite) {
                        Player.state.animation.flags.moveRight = false
                    }
                    break;
                }
                case "KeyA": {
                    const sprite = this.stage.children.find(child => child instanceof Player)
                    if (sprite) {
                        Player.state.animation.flags.moveLeft = false
                    }
                    break;
                }
                case "KeyW": {
                    const sprite = this.stage.children.find(child => child instanceof Player)
                    if (sprite) {
                        Player.state.animation.flags.moveUp = false
                    }
                    break;
                }
                case "KeyS": {
                    const sprite = this.stage.children.find(child => child instanceof Player)
                    if (sprite) {
                        Player.state.animation.flags.moveDown = false
                    }
                    break;
                }
            }
        })
    }

    constructor() {
        super()

        // register the plugin
        gsap.registerPlugin(PixiPlugin);
        // give the plugin a reference to the PIXI object
        PixiPlugin.registerPIXI(PIXI);
    }

    public async loadScene() {
        await Assets.init({ manifest });

        const player = new Player(await Player.loadAssets())
        player.x = 300
        player.y = 300
        this.stage.addChild(player);

        this._bindKeyboard()
    }

    public async run() {
        let elapsed = 0.0;

        this.ticker.add((ticker) => {
            elapsed += ticker.deltaTime;

            const player = this.stage.children.find(child => child instanceof Player)
            if (player) {
                player.routine(ticker.deltaTime);
            }
        });
    }
}
