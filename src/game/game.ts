import Renderer2D from "./Helper/Renderer.helper";

import GameController from "./controller/game.controller";

import Rectangle from "./lib/Rectangle.interface";
import Player from "./entities/Player.entity";
import Gun from "./entities/Gun.entity";
import Enemy from "./entities/Enemy.entity";

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
    height: number,
    width: number,
    speed: number,
    color: string
  },
  gun:{
    bullet:{
      damage: number,
      height: number,
      width: number,
      color: string
    }
    
    fireDelay: number,
    fireSpeed: number
  },

}

export const setupGame = ({

    ctx,
    settings

  }:{

    ctx: CanvasRenderingContext2D, 
    settings: Settings

  })=>{

    const renderer = new Renderer2D(ctx);

    const gameBackground: Rectangle = {
      x: settings.gameBackground.x,
      y: settings.gameBackground.y,
      width: settings.gameBackground.width,
      height: settings.gameBackground.height
    }
  
    const player = new Player({
      x: settings.player.x, 
      y: settings.player.y,
      height: settings.player.height,
      width: settings.player.width,
      speed: settings.player.speed
    });

    const gun = new Gun({
      bulletDamage: settings.gun.bullet.damage,
      fireSpeed: settings.gun.fireSpeed,
      fireDelay: settings.gun.fireDelay,
      bulletHeight: settings.gun.bullet.height,
      bulletWidth: settings.gun.bullet.width
    });

    const enemies :Enemy[] = [

      new Enemy({x: 50, y: 20, height: 50, width: 50, health: 80, color:"yellow"}),
      new Enemy({x: 150, y: 20, height: 50, width: 50, health: 100, color:"yellow"}),
      new Enemy({x: 250, y: 20, height: 50, width: 50, health: 70, color:"yellow"}),
      new Enemy({x: 350, y: 20, height: 50, width: 50, health: 80, color:"yellow"}),
      new Enemy({x: 450, y: 20, height: 50, width: 50, health: 90, color:"yellow"}),
      new Enemy({x: 50, y: 100, height: 50, width: 50, health: 30, color:"yellow"}),
      new Enemy({x: 150, y: 100, height: 50, width: 50, health: 50, color:"yellow"}),
      new Enemy({x: 250, y: 100, height: 50, width: 50, health: 120, color:"yellow"}),
      new Enemy({x: 350, y: 100, height: 50, width: 50, health: 70, color:"yellow"}),
      new Enemy({x: 450, y: 100, height: 50, width: 50, health: 80, color:"yellow"}),

    ];
  
    function setupGameControl(){

      const gameController = new GameController({player, gun});

      document.addEventListener("keydown", (e: KeyboardEvent)=>{     
  
        gameController.updateKeyPressedStatus({keyCode:e.code, status:true});
        gameController.performKeyAction();
  
      });
  
      document.addEventListener("keyup", (e: KeyboardEvent)=>{

        gameController.updateKeyPressedStatus({keyCode:e.code, status:false});

      });
  
    }

    function createGameLoop(){

      function draw(){

        renderer.draw(gameBackground, settings.gameBackground.color);
  
        renderer.draw(player, settings.player.color);

        gun.magazine.forEach((bullet)=>{
          renderer.draw(bullet, settings.gun.bullet.color);
        });

        enemies.forEach((enemy)=>{
          renderer.draw(enemy, enemy.color);
        })

      }

      function update(){

        gun.magazine.forEach((bullet, bulletIndex)=>{ 

          if(bullet.isOffScreen()){
            gun.magazine.splice(bulletIndex, 1);
          }

          bullet.moveUp();

        });

        enemies.forEach((enemy, enemyIndex)=>{

          gun.magazine.some((bullet, bulletIndex)=>{

            if(bullet.collideWith(enemy)){

              gun.magazine.splice(bulletIndex, 1);
              enemy.decreaseHealth(bullet.damage);

            }

          });

          if(enemy.hasZeroHealth()){

            enemies.splice(enemyIndex, 1);

          }

        });

      }
      
      draw();
      update();
      
      requestAnimationFrame(createGameLoop);
  
    }
  
    setupGameControl();

    createGameLoop();

}