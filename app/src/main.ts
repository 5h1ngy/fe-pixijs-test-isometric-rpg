import Engine from "./Engine";

const engine = new Engine();

await engine.init({ width: 800, height: 800 })
await engine.loadScene();
await engine.run();

document.body.appendChild(engine.canvas);