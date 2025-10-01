import {Container} from "pixi.js";

export interface IWeapons {
    getContainer(): Container
    attack(): void;
}