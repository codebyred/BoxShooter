import Rectangle from "../lib/Rectangle.interface";

export default class Bullet implements Rectangle{
    
    x: number;
    y: number;
    width: number;
    height: number;
    damage: number;
    speed: number;

    constructor(
        {
            x,
            y,
            width,
            height,
            damage,
            speed
            
        }:{
            x: number, 
            y: number,
            width: number, 
            height: number, 
            damage: number, 
            speed: number
        }
    ){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.damage = damage;
        this.speed = speed;
    }

    updatePosition(){
        this.y -= this.speed;
    }

}