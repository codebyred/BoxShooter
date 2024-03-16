import Renderer2D from "./Helper/Renderer.helper";

import GameController from "./controller/game.controller";

import Rectangle from "./lib/Rectangle.interface";
import Player from "./entities/Player.class";
import Gun from "./entities/Gun.class";

type Settings = {

  gameBackground:{
    x: number,
    y: number,
    width: number,
    height: number,
    color: string
  },
  player:{
    x: number,
    y: number,
    color: string
  },
  gun:{
    damage: number,
    fireDelay: number,
    fireSpeed: number
  },
  bullet:{
    color: string
  }

}

export const setupGame = ({ctx, settings}:{
  
  ctx: CanvasRenderingContext2D, settings: Settings})=>{

    const renderer = new Renderer2D(ctx);

    const gameBackground: Rectangle = {
      x: settings.gameBackground.x,
      y: settings.gameBackground.y,
      width: settings.gameBackground.width,
      height: settings.gameBackground.height
    }
  
    const player = new Player({x: settings.player.x, y: settings.player.y});

    const gun = new Gun({
      damage: settings.gun.damage,
      fireSpeed: settings.gun.fireSpeed,
      fireDelay: settings.gun.fireDelay
    });
  
    function setupGameControl(){

      const gameController = new GameController({player, gun});

      document.addEventListener("keydown", (e: KeyboardEvent)=>{     
  
        gameController.updateKeyPressedStatus(e.code, true);
        gameController.performKeyAction();
  
      });
  
      document.addEventListener("keyup", (e: KeyboardEvent)=>{

        gameController.updateKeyPressedStatus(e.code, false);

      });
  
    }

    function createGameLoop(){
  
      renderer.draw(gameBackground, settings.gameBackground.color);
  
      renderer.draw(player, settings.player.color);
  
      gun.magazine.forEach((bullet)=>{
        renderer.draw(bullet, settings.bullet.color);
        bullet.updatePosition();
      });
  
      requestAnimationFrame(createGameLoop);
  
    }
  
    setupGameControl();

    createGameLoop();

}