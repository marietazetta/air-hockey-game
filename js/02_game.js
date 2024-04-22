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

    framesCounter: 30, // FPS

    background: undefined,
    goal_box: undefined,
    puck: undefined,
    mullet: undefined,
    mullet2: undefined,

    init() {
        this.setGameDimentions()
        this.setEventListeners()
        this.start()

    },

    setGameDimentions() {
        this.gameScreen.style.height = `${this.gameSize.h}px`
        this.gameScreen.style.width = `${this.gameSize.w}px`
    },


    start() {
        this.startGameLoop()
        this.setElms()
    },

    startGameLoop() {
        setInterval(() => {
            // this.mullet.moveAll()
        }, 30)
    },

    setEventListeners() {
        document.addEventListener('keydown', event => {
            switch (event.code) {
                case this.keys.UP:
                    this.mullet.moveUp();
                    break;
                case this.keys.DOWN:
                    this.mullet.moveDown();
                    break;
                case this.keys.LEFT:
                    this.mullet.moveLeft();
                    break;
                case this.keys.RIGHT:
                    this.mullet.moveRight();
                    break;
            }

            switch (event.code) {
                case this.keys2.UP:
                    this.mullet2.moveUp();
                    break;
                case this.keys2.DOWN:
                    this.mullet2.moveDown();
                    break;
                case this.keys2.LEFT:
                    this.mullet2.moveLeft();
                    break;
                case this.keys2.RIGHT:
                    this.mullet2.moveRight();
                    break;
            }
        })
    },

    setElms() {
        this.background = new Background(this.gameScreen, this.gameSize)
        this.puck = new Puck(this.gameScreen, this.gameSize)
        this.mullet = new Mullet(this.gameScreen, this.gameSize)
        this.mullet2 = new Mullet2(this.gameScreen, this.gameSize)
        this.rightGoalBox = new RightGoalbox(this.gameScreen, this.gameSize)
        this.leftGoalBox = new LeftGoalBox(this.gameScreen, this.gameSize)
    },


    // moveAll() {
    //     this.mullet.move()
    // },

}