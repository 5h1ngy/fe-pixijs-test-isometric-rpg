import Character from "@app/entities.character/Character";

export default class Player extends Character {

    public routine(deltaTime: number) {
        const speed: number = deltaTime / 10;

        if (Player.state.animation.movements.moveRight) {
            // this.x += speed * 24
            // this.y -= speed * 12
            this.y += speed * 12
            this.x += speed * 24

            if (this.playing === false) {
                this.textures = this.assets.walkRight;
                Player.state.animation.current = 'walkRight'
                this.animationSpeed = 0.35;
                this.play()
            }

        } else if (Player.state.animation.movements.moveLeft) {
            // this.x -= speed * 24
            // this.y += speed * 12
            this.x -= speed * 24
            this.y -= speed * 12

            if (this.playing === false) {
                this.textures = this.assets.walkLeft;
                Player.state.animation.current = 'walkLeft'
                this.animationSpeed = 0.35;
                this.play()
            }

        } else if (Player.state.animation.movements.moveUp) {
            // this.y -= speed * 12
            // this.x -= speed * 24
            this.x += speed * 24
            this.y -= speed * 12

            if (this.playing === false) {
                // this.textures = this.assets.walkUp;
                // Player.state.animation.current = 'walkUp'
                this.textures = this.assets.walkRight;
                Player.state.animation.current = 'walkRight'
                this.animationSpeed = 0.35;
                this.play()
            }

        } else if (Player.state.animation.movements.moveDown) {
            // this.y += speed * 12
            // this.x += speed * 24
            this.y += speed * 12
            this.x -= speed * 24

            if (this.playing === false) {
                // this.textures = this.assets.walkDown;
                // Player.state.animation.current = 'walkDown'
                this.textures = this.assets.walkLeft;
                Player.state.animation.current = 'walkLeft'
                this.animationSpeed = 0.35;
                this.play()
            }

        } else if (Player.state.animation.actions.jump.isJump) {
            if (this.playing === false) {
                this.animationSpeed = 0.2;

                switch (Player.state.animation.current) {
                    case "walkRight": {
                        this.textures = this.assets.jumpRight;
                        break;
                    }
                    case "walkLeft": {
                        this.textures = this.assets.jumpLeft;
                        break;
                    }
                    case "walkUp": {
                        this.textures = this.assets.jumpUp;
                        break;
                    }
                    case "walkDown": {
                        this.textures = this.assets.jumpDown;
                        break;
                    }
                }

                this.play()

                setTimeout(() => {
                    Player.state.animation.actions.jump.isJump = false
                    this.textures = this.assets[Player.state.animation.current!];
                }, 400)
            }

        } else {
            this.stop()
            this.currentFrame = 0
            this.textures = this.assets.walkDown;
            Player.state.animation.current = 'walkDown'
        }
    }

}