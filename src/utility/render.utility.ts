export default class Renderer{

    ctx:CanvasRenderingContext2D;
    
    constructor(ctx:CanvasRenderingContext2D) {
        this.ctx = ctx;
    }

    drawRectangle(x: number, y: number, w: number, h: number, color:string){

        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, w, h);

    }

    drawText(x: number, y: number, text: string, color: string, font: string){
    
        this.ctx.font = font;
        this.ctx.fillStyle = color;
        this.ctx.fillText(text, x, y);
        this.ctx.stroke();
        
    }

}
