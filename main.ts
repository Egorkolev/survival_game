import { Application} from "pixi.js";

async function main(): Promise<void> {
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

    const gameContainer = document.getElementById('game-container');
    if (gameContainer) {
        gameContainer.appendChild(app.canvas);
    }
}

void main();

