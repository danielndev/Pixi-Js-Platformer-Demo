class Block extends RigidRect{
    constructor(x, y, w, h, isWall){
        super(x, y, w, h);
  
        this.body.isStatic = true;
        this.body.friction = isWall ? 0 : 0.1;

        this.drawBounds();

        this.boundingBox.interactive = true;
        this.boundingBox.on('mousedown', e => {
            player.grapple(e.data.global.x - this.body.position.x - stage.x, e.data.global.y - this.body.position.y - stage.y, this.body);

        })
    }

    checkPlayerCollisions(){
        Matter.Detector.clear(detector);
        Matter.Detector.setBodies(detector, [this.body, player.body]);
        return Matter.Detector.collisions(detector)
    }
}