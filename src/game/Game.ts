import {Legor} from "@/game/heroes/Legor";
import { Application} from "pixi.js";
import { Container } from "pixi.js";
import { RefObject } from "react";

export const WIDTH = 800;
export const HEIGHT = 600;


export class Game {

    private canvas: HTMLCanvasElement | null = null;

    constructor(canvasRef: RefObject<HTMLCanvasElement | null>) {
        this.canvas = canvasRef.current;
        void this.init()
    }

    private async init(): Promise<void> {

        console.log('Initializing game...');

        if (typeof window === 'undefined') {
            console.log("Error: This code is intended for the browser!");
            return;
        }

        if (!this.canvas || !this.canvas.parentElement) {
            console.log("Error: Canvas or parent element not found!");
            return;
        }

        const app = new Application();
        const containerHero = new Container();

        await app.init({
            background: '#021f4b',
            width: WIDTH,
            height: HEIGHT
        });
        // @ts-ignore
        globalThis.__PIXI_APP__ = app;

        console.log("Replacing canvas with PixiJS canvas...");
        // replace React canvas to PixiJS canvas
        this.canvas.parentElement.replaceChild(app.canvas, this.canvas);

        app.canvas.style.width = '100%';
        app.canvas.style.height = '100%';
        app.canvas.style.display = 'block';

        app.stage.addChild(containerHero);
        const legor = new Legor(containerHero);

        app.ticker.add((time: any) => {
            legor.moveHandle()
        })
    }
}