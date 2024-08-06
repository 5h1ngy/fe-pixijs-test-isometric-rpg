import Core from "./core/Core";

import '../style.css'

const engine = new Core();

await engine.init({ width: 800, height: 800 })
await engine.loadScene();
await engine.run();

document.body.appendChild(engine.canvas);