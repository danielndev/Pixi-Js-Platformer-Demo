const renderTicker = new PIXI.Ticker();

renderTicker.add(() => {
    stage.x = -(player.container.x - view.width / 4);
    stage.y = -(-100 + player.container.y - view.height / 4);
    if(stage.x > 0) stage.x = 0
    if(stage.y < 0) stage.y = 0
    //stage.x = view.width / 2 - (stage.x + player.body.position.x);
    view.render(stage);
})

renderTicker.start();