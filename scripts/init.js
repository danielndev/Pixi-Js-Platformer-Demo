//INITIALISES THE GAME

PIXI.settings.RESOLUTION = window.devicePixelRatio;

//PIXI Init
const view = new PIXI.Renderer({
    view: document.getElementById("game_canvas"),
    width: window.innerWidth,
    height: window.innerHeight,
    resolution: window.devicePixelRatio,
    autoDensity: true,
    transparent: false,
    backgroundColor: 0x468bfa
});

window.addEventListener('resize', () => {
    view.resize(window.innerWidth, window.innerHeight)
})

document.addEventListener('contextmenu', event => event.preventDefault());

const stage = new PIXI.Container();
stage.sortableChildren = true;

//Matter JS Init
const engine = Matter.Engine.create();
const world = engine.world;
const detector = Matter.Detector.create();
//Game Init




document.addEventListener('keydown', e => {
    let key = e.key.toLocaleUpperCase();
    if(keybinds[key])
        keybinds[key].isPressed = true;
})

document.addEventListener('keyup', e => {
    let key = e.key.toLocaleUpperCase();
    if(keybinds[key])
        keybinds[key].isPressed = false;
})

function getKeybind(action){
    if(actions[action].bind != null && keybinds[actions[action].bind] != null){
        return keybinds[actions[action].bind]
    }
    return null;
}


