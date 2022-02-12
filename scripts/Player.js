class Player extends RigidRect{
    constructor(x, y, w, h){
        super(x, y, w / 2, h / 2);

        this.body.isStatic = false;
        this.container = new PIXI.Container();

        this.idleSprite = new PIXI.AnimatedSprite(assets.characters.player.idle);
        this.runSprite = new PIXI.AnimatedSprite(assets.characters.player.run);
        this.idleTransitionSprite = new PIXI.AnimatedSprite(assets.characters.player.idle_transition);
        this.jumpSprite = new PIXI.AnimatedSprite(assets.characters.player.jump);
        this.slideSprite = new PIXI.AnimatedSprite(assets.characters.player.slide);
        this.wallSlideSprite = new PIXI.AnimatedSprite(assets.characters.player.wall_slide);

        this.yAnchor = 0.75;

        this.idleSprite.animationSpeed = 0.2;
        this.idleSprite.anchor.set(0.5, this.yAnchor);
        this.idleSprite.play();

        this.runSprite.animationSpeed = 0.2;
        this.runSprite.anchor.set(0.5, this.yAnchor);
        this.runSprite.play();

        this.idleTransitionSprite.animationSpeed = 0.1;
        this.idleTransitionSprite.anchor.set(0.5, this.yAnchor);
        this.idleTransitionSprite.play();
        this.idleTransitionSprite.loop = false;

        this.slideSprite.animationSpeed = 0.2;
        this.slideSprite.anchor.set(0.5, this.yAnchor);
        this.slideSprite.play();

        this.jumpSprite.animationSpeed = 0.2;
        this.jumpSprite.anchor.set(0.5, this.yAnchor);
        //this.jumpSprite.play();

        this.wallSlideSprite.animationSpeed = 0.2;
        this.wallSlideSprite.anchor.set(0.5, this.yAnchor);
        this.wallSlideSprite.play();

        this.currentAnimation = 'IDLE';

        this.container.addChild(this.idleSprite);
        this.container.addChild(this.runSprite);

        this.container.x = x;
        this.container.y = y;
        this.container.zIndex = 2;

        this.acceleration = 0.03 / 60;
        this.maxVelocity = 10;
 
        this.body.frictionAir = 0;
        this.body.friction = 0;
        this.body.mass = 3
        this.maxVelocity = 5
        this.collisions = {
            x: 0,
            y: 0
        }

        this.justJumped = false;
        this.jumping = false;

        this.justCrouched = false

        this.grappleCable = null;
        this.grapplePosition = null;
        this.grappleGraphic = new PIXI.Graphics();
        stage.addChild(this.grappleGraphic);


        stage.addChild(this.container);
    }



    playerMovement(){
        //Horizontal
        let xMove = 0;
        xMove += getKeybind('RIGHT').isPressed ? 1 : 0;
        xMove -= getKeybind('LEFT').isPressed ? 1 : 0;
        if(xMove < 0) this.container.scale.set(-1, 1);
        else if(xMove > 0) this.container.scale.set(1, 1)

        if(xMove == 0 || Math.sign(xMove) != Math.sign(this.body.velocity.x)){
            this.body.friction = 0.5 ;
            if(Math.abs(this.body.velocity.x) < 5 && this.currentAnimation != 'IDLE_TRANSITION'){
                this.currentAnimation = 'IDLE';
            }else if(Math.abs(this.body.velocity.x) < 1){
                this.currentAnimation = 'IDLE';
            }
            else{
                this.currentAnimation = 'IDLE_TRANSITION'
            }
        }else{
            this.body.friction = 0;
            
        }

        if(xMove != 0){
            this.currentAnimation = 'RUN'
        }



        if(xMove == 0 && Math.abs(this.body.velocity.x) > 0){
            if(Math.abs(this.body.velocity.x) < 2){
                Matter.Body.setVelocity(this.body, {
                    x: 0,
                    y: this.body.velocity.y
                })
            }else {
                Matter.Body.applyForce(this.body, this.body.position, {
                    x: -Math.sign(this.body.velocity.x) * this.acceleration,
                    y: 0
                })
            }
        }else{
            Matter.Body.applyForce(this.body, this.body.position, {
                x: xMove * this.acceleration,
                y: 0
            })
        }


        // if(Math.abs(this.body.velocity.x) > this.maxVelocity){
        //     Matter.Body.setVelocity(this.body, {
        //         x: Math.sign(this.body.velocity.x) * this.maxVelocity,
        //         y: this.body.velocity.y
        //     })
        // }


        //Vertical

        //JUMP
        if(this.collisions.y == 1){
            this.jumping = false;
            this.removeGrapple()
        }
        if(getKeybind('JUMP').isPressed && !this.justJumped && this.collisions.y == 1){
            this.jumping = true;
            Matter.Body.applyForce(this.body, this.body.position, {
                x: 0,
                y: -0.1
            })
        }else if(getKeybind('JUMP').isPressed && !this.justJumped && this.collisions.x != 0 && this.collisions.y == 0){
            this.jumping = true;
            this.removeGrapple() 
            Matter.Body.applyForce(this.body, this.body.position, {
                x: 0.05 * -this.collisions.x,
                y: -0.08
            })
        }else if(getKeybind('JUMP').isPressed){
            this.removeGrapple()
        }

    
        if(this.collisions.y <= 0 && (this.jumping || this.grappleCable != null)){
            this.currentAnimation = 'JUMP';
            if(this.body.velocity.y < -1)
                this.jumpSprite.gotoAndStop(0);
            else if(this.body.velocity.y > 1)
                this.jumpSprite.gotoAndStop(2);
            else
                this.jumpSprite.gotoAndStop(1);
        }



        getKeybind('JUMP').isPressed = this.justJumped;


        if(this.collisions.x != 0 && this.collisions.y == 0 && this.grappleCable == null){
            this.currentAnimation = 'WALL_SLIDE';
            //dthis.body.frictionAir = 0.02
        }else{
            this.body.frictionAir = 0
        }
        

        Matter.Body.setAngle(this.body, 0)
        this.body.angle = 0;

        stage.interactive = true;
    }

    setAnimations(){
        this.container.removeChildren();
        switch(this.currentAnimation){
            case 'RUN':
                this.container.addChild(this.runSprite);
                break;
            case 'IDLE':
                this.container.addChild(this.idleSprite);
                break;
            case 'IDLE_TRANSITION':
                this.container.addChild(this.idleTransitionSprite);
                break;
            case 'JUMP':
                this.container.addChild(this.jumpSprite);
                break;
            case 'SLIDE':
                this.container.addChild(this.slideSprite);
                break;
            case 'WALL_SLIDE':
                this.container.addChild(this.wallSlideSprite);
                break;
            default:
                this.container.addChild(this.runSprite);
                break;      
        }
    }

    setCollisions(collisions){
        this.collisions = collisions;
    }

    update(){
        //this.drawBounds(0xff0000);
        this.playerMovement()
        this.setAnimations();
        this.drawGrapple();
        this.checkDeath();
        this.container.x = this.body.position.x;
        this.container.y = this.body.position.y;
    }

    drawGrapple(){
        this.grappleGraphic.clear();
        if(this.grappleCable == null) return;
    

        this.grappleGraphic.lineStyle(2, 0xffffff)
        //.moveTo(this.grappleCable.bodyA.position.x, this.grappleCable.bodyA.position.y)
        .moveTo(this.grapplePosition.x, this.grapplePosition.y)
        .lineTo(this.body.position.x, this.body.position.y);
    
    }

    removeGrapple(){
        if(this.grappleCable != null){
            Matter.World.remove(world, this.grappleCable);
            this.grappleCable = null;
        }
    }

    grapple(x, y, grappledTo){
        
        this.removeGrapple();
        
        let grappleLength = Math.sqrt(Math.pow(this.body.position.x - (x + grappledTo.position.x), 2) + Math.pow(this.body.position.y - (y + grappledTo.position.y), 2));
        console.log(x, y)
        this.grappleCable = Matter.Constraint.create({
            bodyA: grappledTo,
            bodyB: this.body,
            pointA: {
                x: x,
                y: y
            },
            pointB: {
                x: 0,
                y: 0
            },
            length: grappleLength,
            stiffness: 0.1
        })
        Matter.World.add(world, this.grappleCable);
        console.log(grappleLength)

        console.log(x + grappledTo.position.x, y + grappledTo.position.y)
        this.grapplePosition = {
            x: x + grappledTo.position.x,
            y: y + grappledTo.position.y
        }
    }

    checkDeath(){
        if(this.body.position.y > 1000){
            Matter.Body.setPosition(this.body, maps[0].spawnPoint);
            Matter.Body.setVelocity(this.body, {x: 0, y: 0})
        }
    }
}