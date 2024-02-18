import Rectangle from "../../../interface/Rectangle.interface";

export default class Player implements Rectangle{
    x: number;
    y: number;
    width!: number;
    height!: number;
    speed!: number;

    constructor(x: number, y: number){
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

    
}