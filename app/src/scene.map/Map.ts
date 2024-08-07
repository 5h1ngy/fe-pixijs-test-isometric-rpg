import * as PIXI from 'pixi.js';
import Block from "@app/scene.block/Block";
import { TYPES } from "@app/scene.block/Types";

export default class Map extends PIXI.Container {

    constructor(
        position: { x: number, y: number },
    ) {
        super({ ...position })

    }

    public async init() {

        const blockC = new Block({ pack: await Block.loadDynamicAssets(TYPES.TERRAIN), reset: "terrain" }, { x: 34, y: -16 }, { type: TYPES.TERRAIN })
        this.addChild(blockC);

        const blockB = new Block({ pack: await Block.loadDynamicAssets(TYPES.TERRAIN), reset: "terrain" }, { x: 17, y: -8 }, { type: TYPES.TERRAIN })
        this.addChild(blockB);

        const blockA = new Block({ pack: await Block.loadDynamicAssets(TYPES.TERRAIN), reset: "terrain" }, { x: 0, y: 0 }, { type: TYPES.TERRAIN })
        this.addChild(blockA);

        //  const debugMode = new PIXI.Graphics()
        //      .rect(this.x, this.y, 0, 0)
        //      .fill(0xff0000);

        // this.addChild(debugMode);
    }
}
