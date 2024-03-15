import Rectangle from "../lib/Rectangle.interface";

export default class Bullet implements Rectangle{
    x: number;
    y: number;
    width!: number;
    height!: number;

    constructor(x: number, y: number, width: number, height: number){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}