import './style.css'

import Player from './gameObjects/Player.class'

import Bullet from './gameObjects/Bullet.class'
import BulletController from './controller/Bulltet.controller'

import KeyboardController from './controller/keyboard.controller'

import Renderer2D from './Helper/Renderer.helper'
import Rectangle from './lib/Rectangle.interface'



function createCanvasApp(){

  const canvas = document.querySelector<HTMLCanvasElement>("#canvas");
  
  if(!canvas) return new Error("canvas not defined!");

  canvas.width = window.innerWidth/1.6;
  canvas.height = window.innerHeight/1.8;

  const ctx = canvas.getContext("2d");

  if(!ctx) return new Error("context not defined!");

  function setupGame(){

    if(!canvas) return new Error("canvas not defined!");
    if(!ctx) return new Error("context not defined!");

    const renderer = new Renderer2D(ctx);

    const gameBackground: Rectangle = {
      x:0,
      y:0,
      width: canvas.width,
      height: canvas.height
    }
  
    const player = new Player({x: canvas.width/1.8, y: canvas.height/1.5});

    const bulletController = new BulletController({
      bulletSpeed: 5,
      bulletDamage: 10,
      bulletDelay: 4
    });
  
    function setupGameControl(){

      const keyboardController:KeyboardController = {
        spacePressed: false,
        upPressed: false,
        downPressed: false,
        leftPressed: false,
        rightPressed: false
      };

      function setKeyAction(e:KeyboardEvent, value: boolean){
        if(e.code === "ArrowUp"){    
          return keyboardController.upPressed = value;
        }
  
        if(e.code === "ArrowDown"){
          return keyboardController.downPressed = value;
        }
  
        if(e.code === "ArrowLeft"){
          return keyboardController.leftPressed = value;
        }
  
        if(e.code === "ArrowRight"){
          return keyboardController.rightPressed = value;
        }
  
        if(e.code === "Space"){
          return keyboardController.spacePressed = value;
        }
      }

      document.addEventListener("keydown", (e: KeyboardEvent)=>{
  
        function performKeyAction(){
  
          if(keyboardController.upPressed){
            player.moveUp();
          }
  
          if(keyboardController.downPressed){
            player.moveDown();
          }
  
          if(keyboardController.leftPressed){
            player.moveLeft();
          }
  
          if(keyboardController.rightPressed){
            player.moveRight();
          }
  
          if(keyboardController.spacePressed){
            const bulletWidth = 5;
            const bulletHeight = 15;
            const bulletX = player.x + (player.width/2);
            const bulletY = player.y - bulletWidth;
            bulletController.shoot(new Bullet(bulletX, bulletY, bulletWidth, bulletHeight));
          }
  
        }
  
        setKeyAction(e, true);
        performKeyAction();
  
      });
  
      document.addEventListener("keyup", (e: KeyboardEvent)=>{
        setKeyAction(e, false);
      });
  
    }

    function gameLoop(){

      if(!canvas) return new Error("canvas not defined!");
  
      renderer.drawRectangle(gameBackground, "#020617");
  
      renderer.drawRectangle(player, "#7e5bef");
  
      bulletController.bullets.forEach((bullet)=>{
        renderer.drawRectangle(bullet, "red");
      });
  
      requestAnimationFrame(gameLoop);
  
    }
  
    setupGameControl();

    gameLoop();

  }

  setupGame();

}

createCanvasApp();

