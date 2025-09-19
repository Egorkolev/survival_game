import {Container, Graphics} from "pixi.js";
import {HEIGHT, WIDTH} from "@/game/Game";

export class Legor {
    private containerHero: Container;
    private heroColor: string = "0x264d3d";
    private width: number = 50;
    private height: number = 50;
    private moveSpeed: number = 1;
    private moveUp: boolean = false;
    private moveDown: boolean = false;
    private moveRight: boolean = false;
    private moveLeft: boolean = false;

    constructor(containerHero: Container) {
        this.containerHero = containerHero;
        this.heroView();
        this.keysHandle();
    }

    private heroView (): void {
        const graphics = new Graphics();
        const positionX = WIDTH / 2 - this.width / 2;
        const positionY = HEIGHT / 2 - this.height / 2;

        graphics.rect(positionX, positionY, this.width, this.height)
            .fill({color: this.heroColor});

        this.containerHero.addChild(graphics);
        console.log(this.containerHero.width, this.containerHero.height);
    }

    private keysHandle (): void {
        window.addEventListener('keydown', (event) => {
            if (event.code === 'KeyW' || event.code === 'ArrowUp') {
                this.moveUp = true;
            } else if (event.code === 'KeyS' || event.code === 'ArrowDown') {
                this.moveDown = true;
            } else if (event.code === 'KeyD' || event.code === 'ArrowRight') {
                this.moveRight = true;
            } else if(event.code === 'KeyA' || event.code === 'ArrowLeft') {
                this.moveLeft = true;
            }
        })

        window.addEventListener('keyup', (event) => {
            if (event.code === 'KeyW' || event.code === 'ArrowUp') {
                this.moveUp = false;
            } else if (event.code === 'KeyS' || event.code === 'ArrowDown') {
                this.moveDown = false;
            } else if (event.code === 'KeyD' || event.code === 'ArrowRight') {
                this.moveRight = false;
            } else if(event.code === 'KeyA' || event.code === 'ArrowLeft') {
                this.moveLeft = false;
            }
        })
    }
    public moveHandle (): void {
        if (this.moveUp) {
            this.containerHero.y -= this.moveSpeed;
        }
        if (this.moveDown) {
            this.containerHero.y += this.moveSpeed;
        }
        if (this.moveRight) {
            this.containerHero.x += this.moveSpeed;
        }
        if(this.moveLeft) {
            this.containerHero.x -= this.moveSpeed;
        }
    }
}
