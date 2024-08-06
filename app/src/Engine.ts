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
                        sprite.routineArgs.moveRight = true
                    }
                }
            }
        })

        document.body.addEventListener('keyup', (event) => {
            switch (event.code) {
                case "KeyD": {
                    const sprite = this.stage.children.find(child => child instanceof Player)
                    if (sprite) {
                        sprite.routineArgs.moveRight = false
                    }
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
