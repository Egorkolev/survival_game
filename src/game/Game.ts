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

        if (!this.canvas || !this.canvas.parentElement) {
            console.log("Error: Canvas or parent element not found!");
            return;
        }

        const app = new Application();

        await app.init({
            background: '#1099bb',
            width: 800,
            height: 600
        });

        console.log("Replacing canvas with PixiJS canvas...");
        // Заменяем React canvas на PixiJS canvas
        this.canvas.parentElement.replaceChild(app.canvas, this.canvas);
        
        // Применяем стили для корректного отображения
        app.canvas.style.width = '100%';
        app.canvas.style.height = '100%';
        app.canvas.style.display = 'block';

    }
}