import Core from "./core/Core";

import '../style.css'

const engine = new Core();

await engine.init({ width: 1920, height: 905 })
await engine.loadScene();
await engine.run();

document.body.appendChild(engine.canvas);