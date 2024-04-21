class Mullet { // ES EL JUGADOR 1 Y ES EL COLOR AZUL Y ESTA A LA DERECHA🔵
    constructor(gameScreen, gameSize) {
        this.gameScreen = gameScreen;
        this.gameSize = gameSize;

        this.mulletSize = {
            w: 150,
            h: 150
        };

        this.mulletPos = {
            left: (this.gameSize.w / 2) - (this.mulletSize.w / 2) + 800,
            top: (this.gameSize.h / 2) - (this.mulletSize.h / 2)
        };

        this.mulletSpeed = {
            top: 10,
            left: 5
        };

        this.init();
    }

    init() {
        this.mulletElement = document.createElement('div')

        this.mulletElement.style.backgroundColor = `blue`
        this.mulletElement.style.borderRadius = `50%`

        this.mulletElement.style.position = 'absolute'

        this.mulletElement.style.width = `${this.mulletSize.w}px`
        this.mulletElement.style.height = `${this.mulletSize.h}px`

        this.mulletElement.style.top = `${this.mulletPos.top}px`
        this.mulletElement.style.left = `${this.mulletPos.left}px`

        this.gameScreen.appendChild(this.mulletElement)
    }

    move() {
        this.updatePos()
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

class Mullet2 { // ES EL JUGADOR 2 Y ES EL COLOR ROJO Y ESTA A LA IZQUIERDA🔴
    constructor(gameScreen, gameSize) {
        this.gameScreen = gameScreen;
        this.gameSize = gameSize;

        this.mullet2Size = {
            w: 150,
            h: 150
        };

        this.mullet2Pos = {
            left: (this.gameSize.w / 2) - (this.mullet2Size.w / 2) - 800,
            top: (this.gameSize.h / 2) - (this.mullet2Size.h / 2)
        };

        this.init();
    }

    init() {
        this.mullet2Element = document.createElement('div')

        this.mullet2Element.style.backgroundColor = `red`
        this.mullet2Element.style.borderRadius = `50%`

        this.mullet2Element.style.position = 'absolute'

        this.mullet2Element.style.width = `${this.mullet2Size.w}px`
        this.mullet2Element.style.height = `${this.mullet2Size.h}px`

        this.mullet2Element.style.top = `${this.mullet2Pos.top}px`
        this.mullet2Element.style.left = `${this.mullet2Pos.left}px`

        this.gameScreen.appendChild(this.mullet2Element)
    }
}