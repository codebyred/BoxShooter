import Bullet from "./Bullet.class";

export default class Gun{
    
    magazine!: Bullet[]
    timerTillNextBullet!: number
    fireDelay!: number
    damage!: number
    fireSpeed!: number
    
    constructor({damage, fireSpeed, fireDelay}:{
        damage: number,
        fireSpeed: number,
        fireDelay: number
    }){
        this.magazine = [];
        this.timerTillNextBullet = 0;
        this.fireDelay = fireDelay;
        this.fireSpeed = fireSpeed;
        this.damage = damage;
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

            this.countDownTimer();

        }else{

            this.magazine.push(new Bullet({
                x: bulletPositionX,
                y: bulletPostionY,
                damage: this.damage,
                speed: this.fireSpeed
            }));

            this.setTimer();

        }
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