import Renderer2D from "./Helper/Renderer.helper";

import KeyboardController from "./controller/keyboard.controller";

import Rectangle from "./lib/Rectangle.interface";
import Player from "./entities/Player.class";
import Gun from "./entities/Gun.class";

export const setupGame = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D)=>{

    const renderer = new Renderer2D(ctx);

    const gameBackground: Rectangle = {
      x:0,
      y:0,
      width: canvas.width,
      height: canvas.height
    }
  
    const player = new Player({x: canvas.width/1.8, y: canvas.height/1.5});

    const gun = new Gun();
  
    function setupGameControl(){

      const keyboardController = new KeyboardController();

      document.addEventListener("keydown", (e: KeyboardEvent)=>{     
  
        keyboardController.updateKeyPressedStatus(e.code, true);
        keyboardController.performKeyAction(player, gun);
  
      });
  
      document.addEventListener("keyup", (e: KeyboardEvent)=>{

        keyboardController.updateKeyPressedStatus(e.code, false);

      });
  
    }

    function createGameLoop(){
  
      renderer.draw(gameBackground, "#020617");
  
      renderer.draw(player, "#7e5bef");
  
      gun.magazine.forEach((bullet)=>{
        renderer.draw(bullet, "red");
        bullet.updatePosition();
      });
  
      requestAnimationFrame(createGameLoop);
  
    }
  
    setupGameControl();

    createGameLoop();

}