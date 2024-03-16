import './style.css'

import { setupGame } from './game/game';


function createCanvasApp(){

  const canvas = document.querySelector<HTMLCanvasElement>("#canvas") as HTMLCanvasElement;

  canvas.width = window.innerWidth/1.6;
  canvas.height = window.innerHeight/1.8;

  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

  setupGame({

    ctx,
    settings:{

      gameBackground:{
        x:0,
        y:0,
        width: canvas.width,
        height: canvas.height,
        color: "#020617"
      },
      player:{
        x: canvas.width/1.8,
        y: canvas.height/1.5,
        color: "#7e5bef"
      },
      gun:{
        damage: 1,
        fireDelay: 5,
        fireSpeed: 4
      },
      bullet:{
        color: "red"
      }

  }});

}

createCanvasApp();

