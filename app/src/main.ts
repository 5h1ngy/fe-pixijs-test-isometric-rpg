import * as PIXI from 'pixi.js';
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin";

import '../style.css'

// register the plugin
gsap.registerPlugin(PixiPlugin);
// give the plugin a reference to the PIXI object
PixiPlugin.registerPIXI(PIXI);

// Create the application helper and add its render target to the page
const app = new PIXI.Application();
await app.init({ width: 640, height: 360 })
document.body.appendChild(app.canvas);

// Create the sprite and add it to the stage
let sprite = PIXI.Sprite.from(await PIXI.Assets.load('public/simple_sprite.png'));
app.stage.addChild(sprite);

// keyboard event binding
document.addEventListener('keydown', () => {
  //new way (with plugin):
  gsap.to(sprite, {
    pixi: { scaleX: 2, scaleY: 1.5, skewX: 30, rotation: 60 },
    duration: 1,
  });
})

// Add a ticker callback to move the sprite back and forth
let elapsed = 0.0;
app.ticker.add((ticker) => {
  elapsed += ticker.deltaTime;
  sprite.x = 100.0 + Math.cos(elapsed / 50.0) * 100.0;
});