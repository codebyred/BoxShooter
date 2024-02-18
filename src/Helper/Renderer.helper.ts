import Rectangle from "../interface/Rectangle.interface";

export default class Renderer2D{

    ctx:CanvasRenderingContext2D;

    constructor(ctx:CanvasRenderingContext2D) {
        this.ctx = ctx;
    }

    drawRectangle(rectangle: Rectangle, color:string){

        this.ctx.fillStyle = color;
        this.ctx.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);

    }

    drawText(x: number, y: number, text: string, color: string, font: string){
    
        this.ctx.font = font;
        this.ctx.fillStyle = color;
        this.ctx.fillText(text, x, y);
        this.ctx.stroke();
        
    }

}
