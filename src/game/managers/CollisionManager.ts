import {Enemy} from "@/game/enemies/Enemy";
import {Legor} from "@/game/heroes/Legor";
import {Container} from "pixi.js";

export class CollisionManager {

    constructor(private containerEnemies: Container<any>) {}

    public collisionDetect (legor: Legor, enemy: Enemy[]): void {
        for (let i = 0; i < enemy.length; i++) {
            const heroPos = legor.getPosition();
            const enemyPos = enemy[i].getPosition();

            const heroLeft = heroPos.x - 25;
            const heroRight = heroPos.x + 25;
            const heroTop = heroPos.y - 25;
            const heroBottom = heroPos.y + 25;

            const enemyLeft = enemyPos.x - 25;
            const enemyRight = enemyPos.x + 25;
            const enemyTop = enemyPos.y - 25;
            const enemyBottom = enemyPos.y + 25;

            const isCollision = heroLeft < enemyRight &&
                heroRight > enemyLeft &&
                heroTop < enemyBottom &&
                heroBottom > enemyTop;

            if (isCollision) {
                this.containerEnemies.removeChild(enemy[i].getEnemyContainer());
                enemy.splice(i, 1);
            }
        }
    }
}