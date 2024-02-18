import Bullet from "../class/Bullet.class";
export default class BulletController{
    
    bullets!: Bullet[];
    bulletSpeed: number;
    bulletDamage: number;
    bulletDelay: number;

    constructor(bulletSpeed: number, 
        bulletDamage: number, bulletDelay: number
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