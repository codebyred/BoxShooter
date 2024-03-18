import Rectangle from "../lib/Rectangle.interface";

export default class Bullet implements Rectangle{
    
    x: number;
    y: number;
    width: number;
    height: number;
    damage: number;
    speed: number;


    constructor({
        x,
        y,
        height,
        width,
        damage,
        speed,       
    }:{
        x: number, 
        y: number,
        height: number,
        width: number,
        damage: number, 
        speed: number,

    }){
        this.x = x;
        this.y = y;
        this.width = width
        this.height = height;
        this.damage = damage;
        this.speed = speed;
    }

    moveUp(){
        this.y -= this.speed;
    }

    isOffScreen(){
        return this.y <= - this.height;
    }

    collideWith(sprite: Rectangle){

        if(this.x < sprite.x + sprite.width
        && this.x + this.width > sprite.x
        && this.y < sprite.y + sprite.height
        && this.y + this.height > sprite.y)
            return true;

        return false;
        
    }

}

