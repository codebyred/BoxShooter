import Bullet from "./Bullet.class";

export default class Gun{
    
    magazine!: Bullet[]
    timerTillNextBullet!: number
    fireDelay: number
    damage: number
    fireSpeed: number
    bulletHeight: number;
    bulletWidth: number;
    
    constructor({
        damage, 
        fireSpeed, 
        fireDelay,
        bulletHeight,
        bulletWidth
        
    }:{
        damage: number,
        fireSpeed: number,
        fireDelay: number,
        bulletHeight: number,
        bulletWidth: number
    }){
        this.magazine = [];
        this.timerTillNextBullet = 0;
        this.fireDelay = fireDelay;
        this.fireSpeed = fireSpeed;
        this.damage = damage;
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

        if(this.isTimerSet()){

            return this.countDownTimer();

        }

        this.magazine.push(new Bullet({
            x: bulletPositionX,
            y: bulletPostionY,
            height: this.bulletHeight,
            width: this.bulletWidth,
            damage: this.damage,
            speed: this.fireSpeed,
        }));

        this.setTimer();

    
    }

    isTimerSet(){
        return this.timerTillNextBullet <= 0? false: true;
    }

    setTimer(){
        this.timerTillNextBullet = this.fireDelay;
    }

    countDownTimer(){
        this.timerTillNextBullet--;
    }
}