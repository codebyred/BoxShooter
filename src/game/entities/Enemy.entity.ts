import Rectangle from "../lib/Rectangle.interface";

export default class Enemy implements Rectangle{
    x: number;
    y: number;
    width: number;
    height: number;
    health: number;
    color: string;

    constructor({
        x,
        y,
        height,
        width,
        health,
        color
    }:{
        x: number, 
        y: number,
        height: number,
        width: number,
        health: number,
        color: string,
    }){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;  
        this.health = health;   
        this.color = color;
    }

    decreaseHealth(amount: number){
        this.health -= amount;
        if(this.health <= 10){
            this.color = "blue";
        }
    }

    hasZeroHealth(){
        return this.health <= 0? true: false;
    }
}