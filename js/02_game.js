const Game = {

    gameScreen: document.querySelector('#game-screen'),

    gameSize: {
        w: innerWidth,
        h: innerHeight // De aquí en adelante, w será ancho y h será alto
    },

    framesCounter: 0, // FPS

    background: undefined,
    goal_boxes: undefined,
    puck: undefined,
    mullets: undefined,

}