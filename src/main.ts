import './style.css'

import Player from './class/Player.class'
import Renderer from './utility/Renderer.utility'


function createCanvasApp(){

  const canvas = document.querySelector<HTMLCanvasElement>("#canvas");
  
  if(!canvas) return -1;

  canvas.width = window.innerWidth/1.6;
  canvas.height = window.innerHeight/1.8;

  const ctx = canvas.getContext("2d");

  if(!ctx) return -1;

  const renderer = new Renderer(ctx);

  const player = new Player(canvas.width/1.8, canvas.height/1.5);

  function initEventListeners(){

    document.addEventListener("keyup", (e: KeyboardEvent)=>{

      if(e.code === "ArrowUp"){
        
        player.cancelMove("up");
      }

      if(e.code === "ArrowDown"){
        player.cancelMove("down");
      }

      if(e.code === "ArrowLeft"){
        player.cancelMove("left");
      }

      if(e.code === "ArrowRight"){
        player.cancelMove("right");
      }

    });

    document.addEventListener("keydown", (e: KeyboardEvent)=>{
      if(e.code === "ArrowUp"){
        player.move("up");
      }

      if(e.code === "ArrowDown"){
        player.move("down");
      }

      if(e.code === "ArrowLeft"){
        player.move("left");
      }

      if(e.code === "ArrowRight"){
        player.move("right");
      }
    });

  }

  function gameLoop(){

    function draw(){

      if(!canvas) return -1;

      renderer.drawRectangle(0, 0, canvas.width, canvas.height, "#020617");

      renderer.drawRectangle(player.x, player.y, player.width, player.height, "#7e5bef");
    }

    draw();

    requestAnimationFrame(gameLoop);

  }

  initEventListeners();

  gameLoop();

}

createCanvasApp();

