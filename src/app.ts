import './style.css'

import { setupGame } from './game/game';


function createCanvasApp(){

  const canvas: HTMLCanvasElement | null = document.querySelector<HTMLCanvasElement>("#canvas");
  
  if(!canvas) return new Error("canvas not defined!");

  canvas.width = window.innerWidth/1.6;
  canvas.height = window.innerHeight/1.8;

  const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");

  if(!ctx) return new Error("context not defined!");

  setupGame(canvas, ctx);

}

createCanvasApp();

