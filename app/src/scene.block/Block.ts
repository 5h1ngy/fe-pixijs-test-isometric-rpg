import * as PIXI from 'pixi.js';
import Resource from "./Resource";
import { TYPE, ANIMATION } from "@app/scene.block/Types";

export default class Block extends Resource {

    constructor(
        animations: { pack: Record<string | number, PIXI.Texture[]>, reset: ANIMATION },
        position: { x: number, y: number },
        options: { type: TYPE }
    ) {
        super(animations.pack, animations.reset);

        Block.state.animation.current = animations.reset;
        Block.state.type = options.type;
        this.x = position.x;
        this.y = position.y;
    }

    // public routine(deltaTime: number) {
    //     const speed: number = deltaTime / 10;
    //     console.log(speed)
    // }

}