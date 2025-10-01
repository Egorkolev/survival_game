import {Enemy} from "@/game/enemies/Enemy";
import {Legor} from "@/game/heroes/Legor";

export class WeaponCollisionManager {

    private enemies: Enemy[];
    private legor: Legor;
    constructor(legor: Legor, enemies:Enemy[]) {
        this.enemies = enemies;
        this.legor = legor;
    }

    public collisionDetect (): void {
        for (let i = 0; i < this.enemies.length; i++) {
            const heroPos = this.legor.getPosition();
            const laser = this.legor.getWeapons()[0];
            const laserContainer = laser.getContainer();
            const enemyPos = this.enemies[i].getPosition();

            const laserRight = heroPos.x + laserContainer.width;
            const laserBottom = heroPos.y + laserContainer.height;
            const laserLeft = heroPos.x;
            const laserTop = heroPos.y;

            const enemyLeft = enemyPos.x - 25;
            const enemyRight = enemyPos.x + 25;
            const enemyTop = enemyPos.y - 25;
            const enemyBottom = enemyPos.y + 25;

            const isCollision = laserLeft < enemyRight &&
                laserRight > enemyLeft &&
                laserTop < enemyBottom &&
                laserBottom > enemyTop;

            if (isCollision && laserContainer.visible) {
                this.enemies[i].destroy();
                this.enemies.splice(i, 1);
            }
        }
    }
}