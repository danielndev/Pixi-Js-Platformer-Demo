class Background{
    constructor(x, y, scale, texture){
        this.bg = new PIXI.Sprite(texture)
        this.bg.x = x;
        this.bg.y = y;
        this.bg.scale.set(scale);
        stage.addChild(this.bg)
    }
}