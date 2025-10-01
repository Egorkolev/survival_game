import {IWeapons} from "@/game/weapons/types";
import { Container, Graphics} from "pixi.js";
import {toRad} from "@/utils/helpers";

export class Laser implements IWeapons {
    private weaponContainer: Container = new Container();
    private currentAngle: number = 0;
    private maxAngle: number = 7;
    private angle: number = 45;
    private coolDown: number = 0;
    private coolDownMax: number = 250;

    constructor() {
        this.laserView();
    }

    private laserView () {
        const width: number = 250;
        const height: number = 5;
        const color: string = "#B034EA";
        const graphics = new Graphics();

        graphics.rect(0, 0, width, height)
            .fill({color: color});
        this.weaponContainer.addChild(graphics);
        this.weaponContainer.visible = false;
    }

    public attack () {
        if(this.coolDown === 0){
            this.weaponContainer.visible = true;
            this.weaponContainer.rotation = toRad(this.currentAngle * this.angle);
            this.currentAngle++;
            if(this.currentAngle > this.maxAngle) {
                this.currentAngle = 0;
            }
            setTimeout(() => {
                this.weaponContainer.visible = false;
            }, 1000);
            this.coolDown = this.coolDownMax;
        } else {
            this.coolDown--;
        }
    }

    getContainer(): Container {
        return  this.weaponContainer;
    }
}