import Rectangle from "../lib/Rectangle.interface";

export default class Renderer2D{

    ctx:CanvasRenderingContext2D;

    constructor(ctx:CanvasRenderingContext2D) {
        this.ctx = ctx;
    }

    draw(rectangle: Rectangle, color:string){

        this.ctx.fillStyle = color;
        this.ctx.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);

    }

}
