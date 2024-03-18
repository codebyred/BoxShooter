import Bullet from "./Bullet.entity";

export default class Gun{
    
    magazine!: Bullet[]
    timerTillNextBullet!: number
    fireDelay: number
    bulletDamage: number
    fireSpeed: number
    bulletHeight: number;
    bulletWidth: number;
    
    constructor({
        bulletDamage, 
        fireSpeed, 
        fireDelay,
        bulletHeight,
        bulletWidth
        
    }:{
        bulletDamage: number,
        fireSpeed: number,
        fireDelay: number,
        bulletHeight: number,
        bulletWidth: number
    }){

        this.magazine = [];
        this.timerTillNextBullet = 0;

        this.fireDelay = fireDelay;
        this.fireSpeed = fireSpeed;

        this.bulletDamage = bulletDamage;
        this.bulletHeight = bulletHeight;
        this.bulletWidth = bulletWidth;

    }

    fire({
        bulletPositionX, 
        bulletPostionY, 
    }:
        {
            bulletPositionX:number, 
            bulletPostionY:number, 
        }
    ){

        if(this.isDelayTimerSet()){

            return this.countDownDelayTimer();

        }

        this.magazine.push(new Bullet({
            x: bulletPositionX,
            y: bulletPostionY,
            height: this.bulletHeight,
            width: this.bulletWidth,
            damage: this.bulletDamage,
            speed: this.fireSpeed,
        }));

        this.setDelayTimer();

    
    }

    isDelayTimerSet(){
        return this.timerTillNextBullet <= 0? false: true;
    }

    setDelayTimer(){
        this.timerTillNextBullet = this.fireDelay;
    }

    countDownDelayTimer(){
        this.timerTillNextBullet--;
    }

}