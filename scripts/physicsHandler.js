const physicsTicker = new PIXI.Ticker();

Matter.Runner.run(engine)
physicsTicker.add(() => {
    // Matter.Engine.update(engine);

    let playerCollisions = [];
    for(let i = 0; i < maps[0].platforms.length; i ++){
        let collision = maps[0].platforms[i].checkPlayerCollisions();
        if(collision.length > 0){
            playerCollisions.push(collision[0]);
        }
    }

    let finalCollisions = {
        x: 0,
        y: 0
    }
    for(let i = 0; i < playerCollisions.length; i ++){
        finalCollisions.x += playerCollisions[i].normal.x;
        finalCollisions.y += playerCollisions[i].normal.y
    }

    player.setCollisions(finalCollisions);

    player.update();
})

physicsTicker.start();