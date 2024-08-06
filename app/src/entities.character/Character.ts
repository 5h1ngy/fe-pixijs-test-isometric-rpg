import * as PIXI from 'pixi.js';
import Resource from "./Resource";

export default class Character extends Resource {

    constructor(animations: Record<string | number, PIXI.Texture[]>, position: { x: number, y: number }) {
        super(animations);

        this.x = position.x;
        this.y = position.y;
        // this.skew.y = -0.2; // isometric test
    }

    public routine(deltaTime: number) {
        const speed: number = deltaTime / 10;
        console.log(speed)
    }

}