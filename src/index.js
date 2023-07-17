import * as PIXI from "pixi.js";
import './css/app.scss';

const app = new PIXI.Application({
    background: '#1099bb'
});

function init() {
    // load assets and fonts
    document.body.appendChild(app.view);
    setup();
}

function setup() {
    const container = new PIXI.Container();

    app.stage.addChild(container);

    // Create a new texture
    const texture = PIXI.Texture.from('./assets/sprites/chicken.png');

    // Create a 5x5 grid of bunnies
    for (let i = 0; i < 25; i++) {
        const chick = new PIXI.Sprite(texture);
        chick.anchor.set(0.5);
        chick.x = (i % 5) * 40;
        chick.y = Math.floor(i / 5) * 40;
        console.log(chick.x, chick.y);
        chick.scale.set(0.02);
        container.addChild(chick);
    }

    // Move container to the center
    container.x = app.screen.width / 2;
    container.y = app.screen.height / 2;

    // Center chick sprite in local container coordinates
    container.pivot.x = container.width / 2;
    container.pivot.y = container.height / 2;

    // Listen for animate update
    app.ticker.add((delta) => {
        // rotate the container!
        // use delta to create frame-independent transform
        container.rotation -= 0.01 * delta;
    });

}

init();