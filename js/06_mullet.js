class Mullet { // ES EL JUGADOR 1 Y ES EL COLOR ROJO Y ESTA A LA IZQUIERDA🔴
    constructor(gameScreen, gameSize) {
        this.gameScreen = gameScreen;
        this.gameSize = gameSize;

        this.mulletSize = {
            w: 220,
            h: 220
        };

        this.mulletPos = {
            left: this.gameSize.w * 0.15, // 15% del ancho hacia la derecha desde el borde izquierdo
            top: (this.gameSize.h / 2) - (this.mulletSize.h / 2) // Centrado verticalmente
        };

        this.mulletSpeed = {
            top: 100,
            left: 100
        };

        this.init();
    }

    init() {
        this.mulletElement = document.createElement('div')

        this.mulletElement.style.backgroundColor = `#FF4444`
        this.mulletElement.style.borderRadius = `50%`

        this.mulletElement.style.position = 'absolute'
        this.mulletElement.style.zIndex = '10'

        this.mulletElement.style.width = `${this.mulletSize.w}px`
        this.mulletElement.style.height = `${this.mulletSize.h}px`

        this.mulletElement.style.top = `${this.mulletPos.top}px`
        this.mulletElement.style.left = `${this.mulletPos.left}px`

        this.gameScreen.appendChild(this.mulletElement)
    }

    move() {
        this.updatePos()
    }

    setBordersCollision() {
        if (this.mulletPos.left >= this.gameSize.w - this.mulletSize.w) {
            this.moveLeft()
        }

        if (this.mulletPos.top >= this.gameSize.h - this.mulletSize.h) {
            this.moveTop()
        }

        if (this.mulletPos.left <= 0) {
            this.moveLeft()
        }

        if (this.mulletPos.top <= 0) {
            this.moveTop()
        }
    }

    moveUp() {
        this.mulletPos.top -= this.mulletSpeed.top
        this.updatePos()
    }

    moveDown() {
        this.mulletPos.top += this.mulletSpeed.top
        this.updatePos()
    }

    moveLeft() {
        this.mulletPos.left -= this.mulletSpeed.left
        this.updatePos()
    }

    moveRight() {
        this.mulletPos.left += this.mulletSpeed.left
        this.updatePos()

    }

    updatePos() {
        this.mulletElement.style.top = `${this.mulletPos.top}px`;
        this.mulletElement.style.left = `${this.mulletPos.left}px`;
    } // Why ????
}

class Mullet2 { // ES EL JUGADOR 2 Y ES EL COLOR AZUL Y ESTA A LA DERECHA🔵
    constructor(gameScreen, gameSize) {
        this.gameScreen = gameScreen;
        this.gameSize = gameSize;

        this.mullet2Size = {
            w: 220,
            h: 220
        };

        this.mullet2Pos = {
            left: this.gameSize.w * 0.85 - this.mullet2Size.w, // 85% del ancho, menos el ancho de Mullet2
            top: (this.gameSize.h / 2) - (this.mullet2Size.h / 2) // Centrado verticalmente
        };

        this.mullet2Speed = {
            top: 100,
            left: 100
        };

        this.init();
    }

    init() {
        this.mullet2Element = document.createElement('div')

        this.mullet2Element.style.backgroundColor = `#4486FF`
        this.mullet2Element.style.borderRadius = `50%`

        this.mullet2Element.style.position = 'absolute'
        this.mullet2Element.style.zIndex = '10'

        this.mullet2Element.style.width = `${this.mullet2Size.w}px`
        this.mullet2Element.style.height = `${this.mullet2Size.h}px`

        this.mullet2Element.style.top = `${this.mullet2Pos.top}px`
        this.mullet2Element.style.left = `${this.mullet2Pos.left}px`

        this.gameScreen.appendChild(this.mullet2Element)
    }

    move() {
        this.updatePos()
    }

    setBordersCollision() {
        if (this.mullet2Pos.left >= this.gameSize.w - this.mullet2Size.w) {
            this.turnLeft()
        }

        if (this.mullet2Pos.top >= this.gameSize.h - this.mullet2Size.h) {
            this.turnTop()
        }

        if (this.mullet2Pos.left <= 0) {
            this.turnLeft()
        }

        if (this.mullet2Pos.top <= 0) {
            this.turnTop()
        }
    }

    moveUp() {
        this.mullet2Pos.top -= this.mullet2Speed.top
        this.updatePos()
    }

    moveDown() {
        this.mullet2Pos.top += this.mullet2Speed.top
        this.updatePos()
    }

    moveLeft() {
        this.mullet2Pos.left -= this.mullet2Speed.left
        this.updatePos()
    }

    moveRight() {
        this.mullet2Pos.left += this.mullet2Speed.left
        this.updatePos()

    }

    updatePos() {
        this.mullet2Element.style.top = `${this.mullet2Pos.top}px`;
        this.mullet2Element.style.left = `${this.mullet2Pos.left}px`;
    } // Why ????
}