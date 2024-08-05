import * as PIXI from 'pixi.js';
import '../style.css'


// Create the application helper and add its render target to the page
const app = new PIXI.Application();
await app.init({ width: 640, height: 360 })
document.body.appendChild(app.canvas);

// Create the sprite and add it to the stage
let sprite = PIXI.Sprite.from(await PIXI.Assets.load('public/simple_sprite.png'));
app.stage.addChild(sprite);

// keyboard event binding
let moveSprite = false;
document.addEventListener('keydown', () => {
  moveSprite = true;
})

// Add a ticker callback to move the sprite back and forth
let elapsed = 0.0;
app.ticker.add((ticker) => {
  elapsed += ticker.deltaTime;
  if (moveSprite) {
    sprite.x = 100.0 + Math.cos(elapsed / 50.0) * 100.0;
  }
});