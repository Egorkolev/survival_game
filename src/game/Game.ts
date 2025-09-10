import { Application} from "pixi.js";
import { RefObject } from "react";

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

        const app = new Application();

        await app.init({
            background: '#1099bb',
            width: 800,
            height: 600,
            resizeTo: window
        });

        if (this.canvas) {
            console.log("Appending canvas to game container...");
           this.canvas.appendChild(app.canvas);
        }

    }
}