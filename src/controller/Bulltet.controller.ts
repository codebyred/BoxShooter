import Bullet from "../gameObjects/Bullet.class";
export default class BulletController{
    
    bullets!: Bullet[];
    bulletSpeed: number;
    bulletDamage: number;
    bulletDelay: number;

    constructor({
        bulletSpeed,
        bulletDamage,
        bulletDelay 
    }:{
        bulletSpeed: number, 
        bulletDamage: number,
        bulletDelay: number    
    }
    ){
        this.bullets = [];
        this.bulletSpeed = bulletSpeed;
        this.bulletDamage = bulletDamage;
        this.bulletDelay = bulletDelay;
    }

    shoot(bullet: Bullet){
        this.bullets.push(bullet);
    }
}