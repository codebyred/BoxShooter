import Bullet from "./Bullet.class";

export default class Gun{
    
    magazine!: Bullet[]
    timerTillNextBullet!: number

    constructor(){
        this.magazine = [];
        this.timerTillNextBullet = 0;
    }

    fire(bullet: Bullet, delay: number){

        if(this.isTimerSet()){

            this.countDownTimer();

        }else{

            this.magazine.push(bullet);
            this.setTimer(delay);

        }
    }

    isTimerSet(){
        return this.timerTillNextBullet <= 0? false: true;
    }

    setTimer(delay: number){
        this.timerTillNextBullet = delay;
    }

    countDownTimer(){
        this.timerTillNextBullet--;
    }
}