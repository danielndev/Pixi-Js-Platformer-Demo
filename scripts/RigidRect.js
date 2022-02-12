class RigidRect{
    constructor(x, y, w, h){
        this.body = Matter.Bodies.rectangle(x, y, w, h);
        this.bodyScale = {
            width: w,
            height: h
        }

        Matter.World.add(world, this.body);
        this.body.isStatic = true;

        this.boundingBox = new PIXI.Graphics();



        this.container = new PIXI.Container();
        stage.addChild(this.boundingBox);

    }

    
    drawBounds(colour){
        this.boundingBox.clear();
        this.boundingBox.beginFill(colour != null ? colour : 0x000000, 1);
        this.boundingBox.drawRect(this.body.position.x - this.bodyScale.width / 2, this.body.position.y - this.bodyScale.height / 2,  this.bodyScale.width, this.bodyScale.height);
        
        this.boundingBox.endFill()


    }

    update(){
        this.drawBounds();
    }
}