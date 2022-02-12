const actions = {
    UP: {
        bind: 'W',
    },
    DOWN: {
        bind: 'S',
    },
    LEFT: {
        bind: 'A',
    },
    RIGHT: {
        bind: 'D',
    },
    JUMP: {
        bind: ' '
    },
    PLACE_1: {
        bind: '1'
    },
    PLACE_2: {
        bind: '2'
    },
    PLACE_3: {
        bind: '3'
    },
    OPEN_INVENTORY: {
        bind: 'E'
    },
    CLOSE: {
        bind: 'ESCAPE'
    },
    CROUCH: {
        bind: 'SHIFT'
    }
}

const keybinds = {
    'W': {
        action: 'UP',
        isPressed: false
    },
    'S': {
        action: 'DOWN',
        isPressed: false
    },
    'A': {
        action: 'LEFT',
        isPressed: false
    },
    'D': {
        action: 'RIGHT',
        isPressed: false
    },
    ' ': { //Space
        action: 'JUMP',
        isPressed: false
    },
    'E': {
        action: 'OPEN_INVENTORY',
        isPressed: false
    },
    'ESCAPE': {
        action: 'CLOSE',
        isPressed: false
    },
    'SHIFT': {
        action: 'CROUCH',
        isPressed: false
    }
}