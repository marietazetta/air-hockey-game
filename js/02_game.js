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
        RIGHT: 'KeyD',
        SPACE: 'Space'
    },

    keys2: {
        UP: 'ArrowUp',
        DOWN: 'ArrowDown',
        LEFT: 'ArrowLeft',
        RIGHT: 'ArrowRight'
    },

    framesCounter: 60, // FPS


    background: undefined,
    puck: undefined,
    mullet: undefined,
    mullet2: undefined,
    goalBox1: undefined,
    goalBox2: undefined,
    score: undefined,
    score2: undefined,

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
        //     document.addEventListener('keydown', event => {
        //         switch (event.code) {
        //             case this.keys.UP:
        //                 this.mullet.moveUp();
        //                 break;
        //             case this.keys.DOWN:
        //                 this.mullet.moveDown();
        //                 break;
        //             case this.keys.LEFT:
        //                 this.mullet.moveLeft();
        //                 break;
        //             case this.keys.RIGHT:
        //                 this.mullet.moveRight();
        //                 break;
        //             case this.keys2.UP:
        //                 this.mullet2.moveUp();
        //                 break;
        //             case this.keys2.DOWN:
        //                 this.mullet2.moveDown();
        //                 break;
        //             case this.keys2.LEFT:
        //                 this.mullet2.moveLeft();
        //                 break;
        //             case this.keys2.RIGHT:
        //                 this.mullet2.moveRight();
        //                 break;
        //         }
        //     })


        document.addEventListener('keydown', event => {
            switch (event.code) {
                case this.keys.UP:
                    this.mullet.isMovingUp = true
                    // this.mullet.moveUp()
                    break;

                case this.keys.DOWN:
                    this.mullet.isMovingDown = true
                    // this.mullet.moveDown();
                    break;

                case this.keys.LEFT:
                    this.mullet.isMovingLeft = true
                    // this.mullet.moveLeft();
                    break;

                case this.keys.RIGHT:
                    this.mullet.isMovingRight = true
                    // this.mullet.moveRight();
                    break;

                case this.keys2.UP:
                    this.mullet2.isMovingUp = true
                    // this.mullet2.moveUp();
                    break;

                case this.keys2.DOWN:
                    this.mullet2.isMovingDown = true
                    // this.mullet2.moveDown();
                    break;

                case this.keys2.LEFT:
                    this.mullet2.isMovingLeft = true
                    // this.mullet2.moveLeft();
                    break;

                case this.keys2.RIGHT:
                    this.mullet2.isMovingRight = true
                    // this.mullet2.moveRight();
                    break;


            }

        })

        document.addEventListener('keyup', event => {
            switch (event.code) {
                case this.keys.UP:
                    this.mullet.isMovingUp = false
                    // this.mullet.moveUp()
                    break;
                case this.keys.DOWN:
                    this.mullet.isMovingDown = false
                    // this.mullet.moveDown();
                    break;

                case this.keys.LEFT:
                    this.mullet.isMovingLeft = false
                    // this.mullet.moveLeft();
                    break;

                case this.keys.RIGHT:
                    this.mullet.isMovingRight = false
                    // this.mullet.moveRight();
                    break;

                case this.keys2.UP:
                    this.mullet2.isMovingUp = false
                    // this.mullet2.moveUp();
                    break;

                case this.keys2.DOWN:
                    this.mullet2.isMovingDown = false
                    // this.mullet2.moveDown();
                    break;

                case this.keys2.LEFT:
                    this.mullet2.isMovingLeft = false
                    // this.mullet2.moveLeft();
                    break;

                case this.keys2.RIGHT:
                    this.mullet2.isMovingRight = false
                    // this.mullet2.moveRight();
                    break;
            }
        })

    },







}