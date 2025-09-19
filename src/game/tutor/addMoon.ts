import { Graphics } from 'pixi.js';
import {moonSVG} from "@/assets/svg/moonSVG";

export function addMoon(app: any) {
    const graphics = new Graphics().svg(moonSVG);

    graphics.x = app.screen.width / 2 + 100;
    graphics.y = app.screen.height / 8;
    app.stage.addChild(graphics);
}