
const maps = [
    {
        name: 'Level 1',
        spawnPoint: {
            x: 7000 ,
            y: -200
        },
        cameraBounds: {
            xMin: 0,
            xMax: 10000,
            yMin: 0,
            yMax: 10000
        },
        platforms: [
            //Starting area walls
            //new Block(0, 0, 1800, 100, false),
            new Block(0, 0, 25, 1000, true),
            new Block(500, 500, 1000, 100, false),
            new Block(900, 0, 100, 750, true),

            //Starting area obsticals
            new Block(250, 400, 10, 100, true),
            new Block(250, 0, 10, 500, true),
            new Block(400, 400, 10, 400, true),

            //Grapple obsticals
            new Block(1200, 150, 100, 75, false),
            new Block(2000, 500, 1000, 500, false),

            new Block(2000, 400, 250, 500, false),
            new Block(2200, 400, 250, 700, false),
            new Block(2400, 400, 250, 900, false),
            new Block(2600, 400, 250, 1100, false),
            new Block(3000, -100, 250, 600, false),
            new Block(4100, 0 , 2000, 200, false),
            new Block(6000, 400, 1000 , 500, false),

            new Block(7000, 0, 1000 , 600, true),
            new Block(7000, -300, 1000 , 100, false),
            new Block(6200, -150, 25 , 25, false),
            new Block(6000, -400, 25 , 25, false),
            new Block(6200, -500, 25 , 25, false),
            new Block(7500, 0, 1000 , 1500, true),

        ],
        background: [
            new Background(100, 100, 0.2, assets.background.aAndD),
            new Background(310, 200, 0.42, assets.background.wallJump),
            new Background(1100, 150, 0.4, assets.background.grapple),
            new Background(1300, 150, 0.4, assets.background.release),
            new Background(2700, -300, 0.7, assets.background.downHere),
            new Background(6700, -600, 0.5, assets.background.end),
        ]
    }
]