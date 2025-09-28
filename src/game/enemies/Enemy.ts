import {Container, Graphics} from "pixi.js";
import {HEIGHT, WIDTH} from "@/game/Game";

export class Enemy {
    private containerEnemies: Container;
    private enemyContainer: Container = new Container();
    private enemyColor: string = "#F54927";
    private moveSpeed: number = 0.7;

    constructor(
        containerEnemy: Container,
    ) {
        this.containerEnemies = containerEnemy;
        this.enemyView();
    }

    private enemyView (): void {
        const width: number = 50;
        const height: number = 50;
        const graphics = new Graphics();
        graphics.rect(- width / 2, - height / 2, width, height)
            .fill({color: this.enemyColor});

        this.enemyContainer.x = WIDTH / 2 * Math.random() * 2;
        this.enemyContainer.y = HEIGHT / 2 * Math.random() * 2;
        this.enemyContainer.addChild(graphics);
        this.containerEnemies.addChild(this.enemyContainer);
    }

    public enemyMoveTo(heroPosition: {x: number, y: number}): void {
        if (this.enemyContainer.x < heroPosition.x) {
            this.enemyContainer.x += this.moveSpeed;
        }
        if (this.enemyContainer.x > heroPosition.x) {
            this.enemyContainer.x -= this.moveSpeed;
        }
        if (this.enemyContainer.y < heroPosition.y) {
            this.enemyContainer.y += this.moveSpeed;
        }
        if (this.enemyContainer.y > heroPosition.y) {
            this.enemyContainer.y -= this.moveSpeed;
        }
    }

    public getPosition () {
        return {
            x: Number(this.enemyContainer.x.toFixed()),
            y: Number(this.enemyContainer.y.toFixed())
        }
    }

    public getEnemyContainer(): Container {
        return this.enemyContainer;
    }
}
