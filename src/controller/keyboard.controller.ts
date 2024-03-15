import Player from "../gameObjects/Player.class";
import Gun from "../gameObjects/Gun.class";

export default class KeyboardController{
    spacePressed: boolean;
    upPressed: boolean;
    downPressed: boolean;
    leftPressed: boolean;
    rightPressed: boolean;

    constructor(){
        this.upPressed = false;
        this.downPressed = false;
        this.leftPressed = false;
        this.rightPressed = false;
        this.spacePressed = false;
    }

    updateKeyPressedStatus(keyCode: string, status: boolean){
        
        if(keyCode === "ArrowUp"){    
          return this.upPressed = status;
        }
  
        if(keyCode === "ArrowDown"){
          return this.downPressed = status;
        }
  
        if(keyCode === "ArrowLeft"){
          return this.leftPressed = status;
        }
  
        if(keyCode === "ArrowRight"){
          return this.rightPressed = status;
        }
  
        if(keyCode === "Space"){
          return this.spacePressed = status;
        }

    }

    performKeyAction(player: Player, gun: Gun){
  
        if(this.upPressed){
          player.moveUp();
        }

        if(this.downPressed){
          player.moveDown();
        }

        if(this.leftPressed){
          player.moveLeft();
        }

        if(this.rightPressed){
          player.moveRight();
        }

        if(this.spacePressed){
          player.shoot(gun);
        }

    }

}