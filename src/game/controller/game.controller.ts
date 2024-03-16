import Player from "../entities/Player.class";
import Gun from "../entities/Gun.class";

type GameEntities = {
  player: Player,
  gun: Gun
}

export default class GameController{
    spacePressed: boolean;
    upPressed: boolean;
    downPressed: boolean;
    leftPressed: boolean;
    rightPressed: boolean;
    player: Player;
    gun: Gun;

    constructor({player, gun}:GameEntities){
      this.player = player;
      this.gun = gun;
      this.upPressed = false;
      this.downPressed = false;
      this.leftPressed = false;
      this.rightPressed = false;
      this.spacePressed = false;
    }

    updateKeyPressedStatus({
      keyCode, 
      status}:{
      keyCode: string, 
      status: boolean
    }){
        
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

    performKeyAction(){
  
        if(this.upPressed){
          this.player.moveUp();
        }

        if(this.downPressed){
          this.player.moveDown();
        }

        if(this.leftPressed){
          this.player.moveLeft();
        }

        if(this.rightPressed){
          this.player.moveRight();
        }

        if(this.spacePressed){
          this.player.shoot(this.gun);
        }

    }

}