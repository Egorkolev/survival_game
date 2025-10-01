import {Enemy} from "@/game/enemies/Enemy";
import {Legor} from "@/game/heroes/Legor";

export class CollisionManager {

    private enemies: Enemy[];
    private legor: Legor;
    constructor(legor: Legor, enemies:Enemy[]) {
        this.enemies = enemies;
        this.legor = legor;
    }

    public collisionDetect (): void {
        for (let i = 0; i < this.enemies.length; i++) {
            const heroPos = this.legor.getPosition();
            const enemyPos = this.enemies[i].getPosition();

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

            // if (isCollision) {
            //     this.enemies[i].destroy();
            //     this.enemies.splice(i, 1);
            // }
        }
    }
}