
import { AnimatedSprite } from 'pixi.js';

export interface IState {
    animation: {
        current: string,

        movements: {
            moveRight: boolean,
            moveLeft: boolean,
            moveUp: boolean,
            moveDown: boolean,
        },
        actions: {
            jump: {
                isJump: boolean,
                jumpUp: boolean,
                jumpLeft: boolean,
                jumpDown: boolean,
                jumpRight: boolean,
            }
        },
    }
}

export default class State extends AnimatedSprite {

    public static state: IState = {
        animation: {
            current: 'walkRight',
            movements: {
                moveRight: false,
                moveLeft: false,
                moveUp: false,
                moveDown: false,
            },
            actions: {
                jump: {
                    isJump: false,
                    jumpUp: false,
                    jumpLeft: false,
                    jumpDown: false,
                    jumpRight: false,
                }
            }
        }
    }

}