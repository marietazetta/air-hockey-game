const Game = {

    gameScreen: document.querySelector('#game_screen'),

    gameSize: {
        w: innerWidth,
        h: innerHeight // De aquí en adelante, w será ancho y h será alto
    },

    keys: {
        UP: 'KeyW',
        DOWN: 'KeyS',
        LEFT: 'KeyA',
        RIGHT: 'KeyD'
    },

    keys2: {
        UP: 'ArrowUp',
        DOWN: 'ArrowDown',
        LEFT: 'ArrowLeft',
        RIGHT: 'ArrowRight'
    },

    framesCounter: 0, // FPS

    background: undefined,
    goal_box: undefined,
    puck: undefined,
    mullet: undefined,
    mullet2: undefined,

    init() {
        this.setGameDimentions()
        this.setEventListeners()
        this.setElms()

    },

    setGameDimentions() {
        this.gameScreen.style.height = `${this.gameSize.h}px`
        this.gameScreen.style.width = `${this.gameSize.w}px`
    },

    setEventListeners() {
        document.addEventListener('keydown', event => {
            switch (event.code) {
                case this.keys.UP:
                    this.mullet.moveUp()
                    break
                case this.keys.DOWN:
                    this.mullet.moveDown()
                    break
                case this.keys.LEFT:
                    this.mullet.moveLeft()
                    break
                case this.keys.RIGHT:
                    this.mullet.moveRight()
                    break
            }
        })
    },

    start() { },

    setElms() {
        this.puck = new Puck(this.gameScreen, this.gameSize)
        this.mullet = new Mullet(this.gameScreen, this.gameSize)
        this.mullet2 = new Mullet2(this.gameScreen, this.gameSize)
        this.background = new Background(this.gameScreen, this.gameSize)
    },
}