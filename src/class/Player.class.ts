export default class Player{
    x: number;
    y: number;
    width!: number;
    height!: number;
    speed!: number;
    upPressed!: boolean;
    downPressed!: boolean;
    leftPressed!: boolean;
    rightPressed!: boolean;

    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.speed = 4;
    }

    move(direction: string){

        const checkDirection = ()=>{
            if(direction == "up"){
                
                this.upPressed = true;        
            }
    
            if(direction == "down"){
                this.downPressed = true;     
            }
    
            if(direction == "left"){
                this.leftPressed = true;
                
            }
    
            if(direction == "right"){
                this.rightPressed = true;
                
            }
        }

        const updateDirection = ()=>{
            if(this.upPressed){
                this.y -= this.speed;
            }
            if(this.downPressed){
                this.y += this.speed;
            }
            if(this.leftPressed){
                this.x -= this.speed;
            }
            if(this.rightPressed){
                this.x += this.speed;
            }
        }

        checkDirection();
        updateDirection();

    }

    cancelMove(direction: string){

        const checkDirection = ()=>{
            if(direction == "up"){
                this.upPressed = false;        
            }
    
            if(direction == "down"){
                this.downPressed = false;     
            }
    
            if(direction == "left"){
                this.leftPressed = false;    
            }
    
            if(direction == "right"){
                this.rightPressed = false;   
            }
        }

        checkDirection();
    }
}