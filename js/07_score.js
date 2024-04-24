class Score {
    constructor(gameScreen, gameSize) {
        this.gameScreen = gameScreen;
        this.gameSize = gameSize;

        this.scoreSize = {
            w: 200,
            h: 180
        };

        this.scorePos = {
            left: this.gameSize.w * 0.1,
            top: (this.scoreSize.h / 2) * 0.2
        };

        this.init()
    }

    init() {
        this.scoreElement = document.createElement('div')

        this.scoreElement.style.position = 'absolute'
        this.scoreElement.style.zIndex = '10'

        this.scoreElement.style.width = `${this.scoreSize.w}px`
        this.scoreElement.style.height = `${this.scoreSize.h}px`

        this.scoreElement.style.top = `${this.scorePos.top}px`
        this.scoreElement.style.left = `${this.scorePos.left}px`
        this.scoreElement.innerText = '0'
        this.scoreElement.style.fontFamily = 'arial'
        this.scoreElement.style.fontSize = '35px'

        this.gameScreen.appendChild(this.scoreElement)
    }
}

class Score2 {
    constructor(gameScreen, gameSize) {
        this.gameScreen = gameScreen;
        this.gameSize = gameSize;

        this.score2Size = {
            w: 200,
            h: 180
        };

        this.score2Pos = {
            left: this.gameSize.w * 0.8,
            top: (this.score2Size.h / 2) * 0.2
        };

        this.init()
    }

    init() {
        this.score2Element = document.createElement('div')

        this.score2Element.style.position = 'absolute'
        this.score2Element.style.zIndex = '10'

        this.score2Element.style.width = `${this.score2Size.w}px`
        this.score2Element.style.height = `${this.score2Size.h}px`

        this.score2Element.style.top = `${this.score2Pos.top}px`
        this.score2Element.style.left = `${this.score2Pos.left}px`
        this.score2Element.innerText = '0'
        this.score2Element.style.fontFamily = 'arial'
        this.score2Element.style.fontSize = '35px'

        this.gameScreen.appendChild(this.score2Element)
    }
}