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

        const map = new Map({ x: 900, y: -1700 })
        map.init();
        this.stage.addChild(map);

        const player = new Player({ pack: await Player.loadDynamicAssets(), reset: "walkRight" }, { x: (1920 / 2), y: (905 / 2) })
        this.stage.addChild(player);

        this.stage.position.x = player.x
        this.stage.position.y = player.y
    }

    public async run() {
        let elapsed = 0.0;

        this.ticker.add((ticker) => {
            elapsed += ticker.deltaTime;

            const player = this.stage.children.find(child => child instanceof Player)
            if (player) {
                player.routine(ticker.deltaTime);
                this.stage.position.x = (player.x * -1) + (1920 / 2)
                this.stage.position.y = (player.y * -1) + (905 / 2)
            }
        });
    }
}
