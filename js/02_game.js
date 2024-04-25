const Game = {

    gameScreen: document.querySelector('#game_screen'),

    gameSize: {
        w: innerWidth,
        h: innerHeight
    },

    keys: {
        UP: 'KeyW',
        DOWN: 'KeyS',
        LEFT: 'KeyA',
        RIGHT: 'KeyD',
        SPACE: 'Space'
    },

    keys2: {
        UP: 'ArrowUp',
        DOWN: 'ArrowDown',
        LEFT: 'ArrowLeft',
        RIGHT: 'ArrowRight'
    },

    framesCounter: 60,


    background: undefined,
    puck: undefined,
    mullet: undefined,
    mullet2: undefined,
    goalBox1: undefined,
    goalBox2: undefined,
    score: undefined,
    score2: undefined,
    goalsound: undefined,

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

    setElms() {
        this.background = new Background(this.gameScreen, this.gameSize)
        this.puck = new Puck(this.gameScreen, this.gameSize)
        this.mullet = new Mullet(this.gameScreen, this.gameSize)
        this.mullet2 = new Mullet2(this.gameScreen, this.gameSize)
        this.rightGoalBox = new RightGoalbox(this.gameScreen, this.gameSize)
        this.leftGoalBox = new LeftGoalBox(this.gameScreen, this.gameSize)
        this.score = new Score(this.gameScreen, this.gameSize)
        this.score2 = new Score2(this.gameScreen, this.gameSize)
        this.goalsound = new Audio("./vfx/goalsound.mp3")
    },

    startGameLoop() {
        this.intervalId = setInterval(() => {
            this.moveAll()
            this.checkCollisions()
        }, 1000 / this.framesCounter)

    },

    moveAll() {
        this.puck.move()
        this.mullet.move()
        this.mullet2.move()

    },

    checkCollisions() {
        this.puck.checkCollisionWithMullet(this.mullet)
        this.puck.checkCollisionWithMullet2(this.mullet2)
        this.puck.checkCollisionWithRightGoalBox(this.rightGoalBox)
        this.puck.checkCollisionWithLeftGoalBox(this.leftGoalBox)
    },

    setEventListeners() {

        document.addEventListener('keydown', event => {
            switch (event.code) {
                case this.keys.UP:
                    this.mullet.isMovingUp = true

                    break;

                case this.keys.DOWN:
                    this.mullet.isMovingDown = true

                    break;

                case this.keys.LEFT:
                    this.mullet.isMovingLeft = true

                    break;

                case this.keys.RIGHT:
                    this.mullet.isMovingRight = true

                    break;

                case this.keys2.UP:
                    this.mullet2.isMovingUp = true

                    break;

                case this.keys2.DOWN:
                    this.mullet2.isMovingDown = true

                    break;

                case this.keys2.LEFT:
                    this.mullet2.isMovingLeft = true

                    break;

                case this.keys2.RIGHT:
                    this.mullet2.isMovingRight = true

                    break;
            }

        })

        document.addEventListener('keyup', event => {
            switch (event.code) {
                case this.keys.UP:
                    this.mullet.isMovingUp = false

                    break;
                case this.keys.DOWN:
                    this.mullet.isMovingDown = false

                    break;

                case this.keys.LEFT:
                    this.mullet.isMovingLeft = false

                    break;

                case this.keys.RIGHT:
                    this.mullet.isMovingRight = false

                    break;

                case this.keys2.UP:
                    this.mullet2.isMovingUp = false

                    break;

                case this.keys2.DOWN:
                    this.mullet2.isMovingDown = false

                    break;

                case this.keys2.LEFT:
                    this.mullet2.isMovingLeft = false

                    break;

                case this.keys2.RIGHT:
                    this.mullet2.isMovingRight = false

                    break;
            }
        })

    },


}