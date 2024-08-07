import { AnimatedSprite } from 'pixi.js';

export interface IState {
    animation: {
        current: string,
    }
}

export default class State extends AnimatedSprite {

    public static state: IState = {
        animation: {
            current: 'walkRight',
        }
    }

}