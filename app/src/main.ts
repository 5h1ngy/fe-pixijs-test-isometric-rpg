import Core from "./Core";

import '../style.css'

const engine = new Core();

await engine.init({ width: Core.SCREEN_WIDTH, height: Core.SCREEN_HEIGHT })
await engine.loadScene();
await engine.run();

document.body.appendChild(engine.canvas);