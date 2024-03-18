import Rectangle from "../lib/Rectangle.interface";

import Gun from "./Gun.entity";

export default class Player implements Rectangle{
    x: number;
    y: number;
    width: number;
    height: number;
    speed: number;

    constructor({
        x,
        y,
        height,
        width,
        speed
    }:{
        x: number, 
        y: number,
        height: number,
        width: number,
        speed: number
    }){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;  
        this.speed = speed;   
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