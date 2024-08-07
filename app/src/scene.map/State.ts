import { AnimatedSprite } from 'pixi.js';
import { TYPES } from "@app/scene.block/Types";

export interface IState {
    type: TYPES | undefined,
    animation: {
        current: string | undefined,
    }
}

export default class State extends AnimatedSprite {

    public static state: IState = {
        type: undefined,
        animation: {
            current: undefined,
        }
    }

}