import Bullet from "./Bullet.class";

export default class Gun{
    
    magazine!: Bullet[]
    timerTillNextBullet!: number
    fireRate!: number

    constructor(){
        this.magazine = [];
        this.timerTillNextBullet = 0;
        this.fireRate = 5;
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
        if(this.timerTillNextBullet <= 0){
            return false;
        }
        return true;
    }

    setTimer(delay: number){
        this.timerTillNextBullet = delay;
    }

    countDownTimer(){
        this.timerTillNextBullet--;
    }
}