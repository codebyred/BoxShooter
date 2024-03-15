import './style.css'

import Rectangle from './lib/Rectangle.interface'

import Player from './gameObjects/Player.class'
import Gun from './gameObjects/Gun.class'

import KeyboardController from './controller/keyboard.controller'

import Renderer2D from './Helper/Renderer.helper'


function createCanvasApp(){

  const canvas: HTMLCanvasElement | null = document.querySelector<HTMLCanvasElement>("#canvas");
  
  if(!canvas) return new Error("canvas not defined!");

  canvas.width = window.innerWidth/1.6;
  canvas.height = window.innerHeight/1.8;

  const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");

  if(!ctx) return new Error("context not defined!");

  function setupGame(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D){

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
        bullet.y -= bullet.speed;
      });
  
      requestAnimationFrame(createGameLoop);
  
    }
  
    setupGameControl();

    createGameLoop();

  }

  setupGame(canvas, ctx);

}

createCanvasApp();

