import Rectangle from "../lib/Rectangle.interface";

import Gun from "./Gun.class";

export default class Player implements Rectangle{
    x: number;
    y: number;
    width!: number;
    height!: number;
    speed!: number;

    constructor({x,y}:{x: number, y: number}){
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;  
        this.speed = 4;   
    }

    moveUp(){
        this.y -= this.speed;
    }

    moveDown(){
        this.y += this.speed;
    }

    moveLeft(){
        this.x -= this.speed;
    }

    moveRight(){
        this.x += this.speed;
    }

    shoot(gun: Gun){
        gun.fire({
            bulletPositionX: this.x + (this.width/2),
            bulletPostionY: this.y,
        });
    }

    
}