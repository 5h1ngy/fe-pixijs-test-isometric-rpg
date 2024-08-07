import * as PIXI from 'pixi.js';
import { Application, Assets } from 'pixi.js';
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin";

import manifest from "@assets/manifest.json";
import Keyboard from "@app/core.inputOutput/Keyboard";
import Player from "@app/entities.player/Player";
import Map from "@app/scene.map/Map";

export default class Core extends Application {

    private keyboard: Keyboard

    constructor() {
        super()

        // register the plugin
        gsap.registerPlugin(PixiPlugin);
        // give the plugin a reference to the PIXI object
        PixiPlugin.registerPIXI(PIXI);

        // register keyboard
        this.keyboard = new Keyboard(Player.state)
        this.keyboard.bind()
    }

    public async loadScene() {
        await Assets.init({ manifest });

        const map = new Map({ x: 100, y: 100 })
        map.init();
        this.stage.addChild(map);

        const player = new Player({ pack: await Player.loadDynamicAssets(), reset: "walkRight" }, { x: 300, y: 300 })
        this.stage.addChild(player);
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
