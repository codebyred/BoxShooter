import Rectangle from "../lib/Rectangle.interface";
import Bullet from "./Bullet.class";
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

        const delay = 7;
        const speed = 5;
        const damage = 1;
        const bulletX = this.x + (this.width/2);
        const bulletY = this.y;
        const bulletHeight = 15;
        const bulletWidth = 5;

        gun.fire(new Bullet(
            {
                x: bulletX,
                y: bulletY,
                height: bulletHeight,
                width: bulletWidth,
                speed: speed,
                damage: damage
            }),
            delay
        );
    }

    
}