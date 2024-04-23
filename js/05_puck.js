class Puck {
    constructor(gameScreen, gameSize) { // No estaba pasando gameScreen como parámetro.
        this.gameScreen = gameScreen;
        this.gameSize = gameSize;

        this.puckSize = {
            w: 120,
            h: 120
        };
        this.puckPos = {
            left: (this.gameSize.w / 2) - (this.puckSize.w / 2),
            top: (this.gameSize.h / 2) - (this.puckSize.h / 2)
        };

        this.setInitialPos()

        this.puckPhysics = { // Cambios
            speed: {
                top: 10,
                left: 10
            },
            gravity: .9
        };

        this.init()
    }

    setInitialPos() {
        this.puckPos = {
            left: (this.gameSize.w / 2) - (this.puckSize.w / 2),
            top: (this.gameSize.h / 2) - (this.puckSize.h / 2)
        }
    }

    init() { // DOM, estilos y propiedades.
        this.puckElement = document.createElement('div') // Creamos en el DOM.

        // this.puckElement.src = 'img.png' 

        this.puckElement.style.backgroundColor = `#323232` // Color.
        this.puckElement.style.borderRadius = `50%` // Redondel del Puck.

        this.puckElement.style.position = 'absolute'
        this.puckElement.style.zIndex = '10' // De esta forma el puck está por encima del background.

        this.puckElement.style.width = `${this.puckSize.w}px`
        this.puckElement.style.height = `${this.puckSize.h}px`

        this.puckElement.style.top = `${this.puckPos.top}px`
        this.puckElement.style.left = `${this.puckPos.left}px`

        this.gameScreen.appendChild(this.puckElement)
    }

    reset() {
        this.setInitialPos()
        this.updatePos()
    }

    move() {

        this.puckPos.top += this.puckPhysics.speed.top
        this.puckPos.left += this.puckPhysics.speed.left

        this.checkBordersCollision()
        this.updatePos()

    }

    checkBordersCollision() {
        if (this.puckPos.left >= this.gameSize.w - this.puckSize.w) {
            this.turnLeft()
        }

        if (this.puckPos.top >= this.gameSize.h - this.puckSize.h) {
            this.turnTop()
        }

        if (this.puckPos.left <= 0) {
            this.turnLeft()
        }

        if (this.puckPos.top <= 0) {
            this.turnTop()
        }
    }

    turnLeft() {
        this.puckPhysics.speed.left *= -1
    }
    turnTop() {
        this.puckPhysics.speed.top *= -1
    }

    checkCollisionWithMullet(mullet) {
        if (this.puckPos.left < mullet.mulletPos.left + mullet.mulletSize.w &&
            this.puckPos.left + this.puckSize.w > mullet.mulletPos.left &&
            this.puckPos.top < mullet.mulletPos.top + mullet.mulletSize.h &&
            this.puckPos.top + this.puckSize.h > mullet.mulletPos.top) {
            //
            this.turnLeft()
            this.turnTop()
        }
    }

    checkCollisionWithMullet2(mullet2) {
        if (this.puckPos.left < mullet2.mullet2Pos.left + mullet2.mullet2Size.w &&
            this.puckPos.left + this.puckSize.w > mullet2.mullet2Pos.left &&
            this.puckPos.top < mullet2.mullet2Pos.top + mullet2.mullet2Size.h &&
            this.puckPos.top + this.puckSize.h > mullet2.mullet2Pos.top) {
            //
            this.turnLeft()
            this.turnTop()
        }
    }

    updatePos() {
        this.puckElement.style.top = `${this.puckPos.top}px`
        this.puckElement.style.left = `${this.puckPos.left}px`
    }
}