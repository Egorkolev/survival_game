import {Container, Graphics} from "pixi.js";
import {HEIGHT, WIDTH} from "@/game/Game";

export class Legor {
    private containerHeroies: Container;
    private heroContainer: Container = new Container();
    private heroColor: string = "0x264d3d";
    private moveSpeed: number = 1;
    private moveUp: boolean = false;
    private moveDown: boolean = false;
    private moveRight: boolean = false;
    private moveLeft: boolean = false;

    constructor(containerHero: Container) {
        this.containerHeroies = containerHero;
        this.heroView();
        this.keysHandle();
    }

    private heroView (): void {
        const width: number = 50;
        const height: number = 50;
        const graphics = new Graphics();

        graphics.rect(this.heroContainer.x - width / 2, this.heroContainer.y - height / 2, width, height)
            .fill({color: this.heroColor});

        this.heroContainer.x = WIDTH / 2;
        this.heroContainer.y = HEIGHT / 2;
        this.heroContainer.addChild(graphics);
        this.containerHeroies.addChild(this.heroContainer);
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
            this.heroContainer.y -= this.moveSpeed;
        }
        if (this.moveDown) {
            this.heroContainer.y += this.moveSpeed;
        }
        if (this.moveRight) {
            this.heroContainer.x += this.moveSpeed;
        }
        if(this.moveLeft) {
            this.heroContainer.x -= this.moveSpeed;
        }
    }

    public getPosition () {
        return {
            x: Number(this.heroContainer.x.toFixed()),
            y: Number(this.heroContainer.y.toFixed())
        }
    }
}
