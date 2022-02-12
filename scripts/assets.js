// PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

const assets = {
    characters: {
        player: {
            idle: [
                new PIXI.Texture.from("images/characters/player/idle/1.png"),
                new PIXI.Texture.from("images/characters/player/idle/2.png"),
                new PIXI.Texture.from("images/characters/player/idle/3.png"),
                new PIXI.Texture.from("images/characters/player/idle/4.png"),
                new PIXI.Texture.from("images/characters/player/idle/5.png"),
                new PIXI.Texture.from("images/characters/player/idle/6.png"),
                new PIXI.Texture.from("images/characters/player/idle/7.png"),   
            ],
            run: [
                new PIXI.Texture.from("images/characters/player/run/1.png"),
                new PIXI.Texture.from("images/characters/player/run/2.png"),
                new PIXI.Texture.from("images/characters/player/run/3.png"),
                new PIXI.Texture.from("images/characters/player/run/4.png"),
                new PIXI.Texture.from("images/characters/player/run/5.png"),
                new PIXI.Texture.from("images/characters/player/run/6.png"),
                new PIXI.Texture.from("images/characters/player/run/7.png"),   
                new PIXI.Texture.from("images/characters/player/run/8.png"),   
            ],
            idle_transition: [
                new PIXI.Texture.from("images/characters/player/idle_transition/2.png"),
                new PIXI.Texture.from("images/characters/player/idle_transition/1.png"),
            ],
            jump: [
                new PIXI.Texture.from("images/characters/player/jump/1.png"),
                new PIXI.Texture.from("images/characters/player/jump/2.png"),
                new PIXI.Texture.from("images/characters/player/jump/3.png"),
            ],
            slide: [
                new PIXI.Texture.from("images/characters/player/slide/1.png"),
                new PIXI.Texture.from("images/characters/player/slide/2.png"),
                new PIXI.Texture.from("images/characters/player/slide/3.png"),
                new PIXI.Texture.from("images/characters/player/slide/4.png"),
            ],
            wall_slide: [
                new PIXI.Texture.from("images/characters/player/wall_slide/1.png"),
                new PIXI.Texture.from("images/characters/player/wall_slide/2.png"),
                new PIXI.Texture.from("images/characters/player/wall_slide/3.png"),
                new PIXI.Texture.from("images/characters/player/wall_slide/4.png"),
                new PIXI.Texture.from("images/characters/player/wall_slide/5.png"),
                new PIXI.Texture.from("images/characters/player/wall_slide/6.png"),
            ],
            grapple: [
                new PIXI.Texture.from("images/characters/player/wall_slide/1.png"),
            ]
        }
    },
    background: {
        aAndD:  new PIXI.Texture.from("images/background/AandD.png"),
        wallJump: new PIXI.Texture.from("images/background/wall_jump.png"),
        grapple: new PIXI.Texture.from("images/background/grapple.png"),
        release: new PIXI.Texture.from("images/background/release.png"),
        downHere: new PIXI.Texture.from("images/background/down_Here.png"),
        end: new PIXI.Texture.from("images/background/end.png")
    }
}