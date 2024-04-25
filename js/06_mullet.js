class Mullet { // ES EL JUGADOR 1 Y ES EL COLOR ROJO Y ESTA A LA IZQUIERDA🔴
    constructor(gameScreen, gameSize) {
        this.gameScreen = gameScreen;
        this.gameSize = gameSize;

        this.mulletSize = {
            w: 180,
            h: 180
        };

        this.mulletPos = {
            left: this.gameSize.w * 0.15, // 15% del ancho hacia la derecha desde el borde izquierdo
            top: (this.gameSize.h / 2) - (this.mulletSize.h / 2) // Centrado verticalmente
        };

        this.mulletSpeed = {
            top: 89.50,
            left: 89.50
        };

        this.isMovingUp = false
        this.isMovingDown = false
        this.isMovingRight = false
        this.isMovingLeft = false

        this.init();
    }

    init() {
        this.mulletElement = document.createElement('div')

        this.mulletElement.style.backgroundImage = "url('img/mulletred.png')"
        this.mulletElement.style.backgroundSize = "contain"
        this.mulletElement.style.backgroundRepeat = "no-repeat"

        this.mulletElement.style.position = 'absolute'
        this.mulletElement.style.zIndex = '10'

        this.mulletElement.style.width = `${this.mulletSize.w}px`
        this.mulletElement.style.height = `${this.mulletSize.h}px`

        this.mulletElement.style.top = `${this.mulletPos.top}px`
        this.mulletElement.style.left = `${this.mulletPos.left}px`

        this.gameScreen.appendChild(this.mulletElement)
    }

    move() {
        if (this.isMovingUp) {
            this.mulletPos.top -= 15
        }
        this.updatePos()

        if (this.isMovingDown) {
            this.mulletPos.top += 15
        }
        this.updatePos()

        if (this.isMovingLeft) {
            this.mulletPos.left -= 15
        }
        this.updatePos()

        if (this.isMovingRight) {
            this.mulletPos.left += 15
        }
        this.updatePos()

        this.checkCollisionMullet()

    }

    checkwCollisionMullet() {
        if (this.mulletPos.left >= this.gameSize.w - this.mulletSize.w) {
            this.mulletTurnLeft()
        }

        if (this.mulletPos.top >= this.gameSize.h - this.mulletSize.h) {
            this.mulletTurnTop()
        }

        if (this.mulletPos.left <= 0) {
            this.mulletTurnLeft()
        }

        if (this.mulletPos.top <= 0) {
            this.mulletTurnTop()
        }
    }

    mulletTurnLeft() {
        this.mulletSpeed.left *= -1
    }
    mulletTurnTop() {
        this.mulletSpeed.top *= -1
    }



    // moveUp() {
    //     this.mulletPos.top = Math.max(0, this.mulletPos.top - this.mulletSpeed.top)
    //     this.updatePos()
    // }

    // moveDown() {
    //     this.mulletPos.top = Math.min(this.gameSize.h - this.mulletSize.h, this.mulletPos.top + this.mulletSpeed.top)
    //     this.updatePos()
    // }

    // moveLeft() {
    //     this.mulletPos.left = Math.max(0, this.mulletPos.left - this.mulletSpeed.left)
    //     this.updatePos()
    // }

    // moveRight() {
    //     this.mulletPos.left = Math.min(this.gameSize.w - this.mulletSize.w, this.mulletPos.left + this.mulletSpeed.left)
    //     this.updatePos()

    // }

    updatePos() {
        this.mulletElement.style.top = `${this.mulletPos.top}px`
        this.mulletElement.style.left = `${this.mulletPos.left}px`
    }
}

class Mullet2 { // ES EL JUGADOR 2 Y ES EL COLOR AZUL Y ESTA A LA DERECHA🔵
    constructor(gameScreen, gameSize) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize

        this.mullet2Size = {
            w: 180,
            h: 180
        };

        this.mullet2Pos = {
            left: this.gameSize.w * 0.85 - this.mullet2Size.w, // 85% del ancho, menos el ancho de Mullet2
            top: (this.gameSize.h / 2) - (this.mullet2Size.h / 2) // Centrado verticalmente
        };

        this.mullet2Speed = {
            top: 89.50,
            left: 89.50
        };

        this.isMovingUp = false
        this.isMovingDown = false
        this.isMovingRight = false
        this.isMovingLeft = false

        this.init();
    }

    init() {
        this.mullet2Element = document.createElement('div')

        this.mullet2Element.style.backgroundImage = "url('img/mulletblue.png')"
        this.mullet2Element.style.backgroundSize = "contain"
        this.mullet2Element.style.backgroundRepeat = "no-repeat"
        this.mullet2Element.style.position = 'absolute'
        this.mullet2Element.style.zIndex = '10'

        this.mullet2Element.style.width = `${this.mullet2Size.w}px`
        this.mullet2Element.style.height = `${this.mullet2Size.h}px`

        this.mullet2Element.style.top = `${this.mullet2Pos.top}px`
        this.mullet2Element.style.left = `${this.mullet2Pos.left}px`

        this.gameScreen.appendChild(this.mullet2Element)
    }

    move() {
        if (this.isMovingUp) {
            this.mullet2Pos.top -= 15
        }
        this.updatePos()

        if (this.isMovingDown) {
            this.mullet2Pos.top += 15
        }
        this.updatePos()

        if (this.isMovingLeft) {
            this.mullet2Pos.left -= 15
        }
        this.updatePos()

        if (this.isMovingRight) {
            this.mullet2Pos.left += 15
        }
        this.updatePos()
    }



    // moveUp() {
    //     this.mullet2Pos.top = Math.max(0, this.mullet2Pos.top - this.mullet2Speed.top)
    //     this.updatePos()
    // }

    // moveDown() {
    //     this.mullet2Pos.top = Math.min(this.gameSize.h - this.mullet2Size.h, this.mullet2Pos.top + this.mullet2Speed.top)
    //     this.updatePos()
    // }

    // moveLeft() {
    //     this.mullet2Pos.left = Math.max(0, this.mullet2Pos.left - this.mullet2Speed.left)
    //     this.updatePos()
    // }

    // moveRight() {
    //     this.mullet2Pos.left = Math.min(this.gameSize.w - this.mullet2Size.w, this.mullet2Pos.left + this.mullet2Speed.left)
    //     this.updatePos()

    // }

    updatePos() {
        this.mullet2Element.style.top = `${this.mullet2Pos.top}px`
        this.mullet2Element.style.left = `${this.mullet2Pos.left}px`
    }
}