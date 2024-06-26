class LeftGoalBox {

    constructor(gameScreen, gameSize) {

        this.gameScreen = gameScreen
        this.gameSize = gameSize

        this.leftGoalBoxSize = {
            w: 20,
            h: 499,
        }

        this.leftGoalBoxPos = {
            left: this.gameSize.w * 0.0001,
            top: (this.gameSize.h / 2) - (this.leftGoalBoxSize.h / 2)
        }

        this.init()
    }

    init() {

        this.leftGoalBoxElement = document.createElement('div')


        this.leftGoalBoxElement.style.backgroundColor = `#BA0000`

        this.leftGoalBoxElement.style.position = 'absolute'
        this.leftGoalBoxElement.style.zIndex = '11'

        this.leftGoalBoxElement.style.width = `${this.leftGoalBoxSize.w}px`
        this.leftGoalBoxElement.style.height = `${this.leftGoalBoxSize.h}px`

        this.leftGoalBoxElement.style.top = `${this.leftGoalBoxPos.top}px`
        this.leftGoalBoxElement.style.left = `${this.leftGoalBoxPos.left}px`

        this.gameScreen.appendChild(this.leftGoalBoxElement)

    }
}

class RightGoalbox {

    constructor(gameScreen, gameSize) {

        this.gameScreen = gameScreen
        this.gameSize = gameSize

        this.rightGoalBoxSize = {
            w: 20,
            h: 499,
        }

        this.rightGoalBoxPos = {
            left: this.gameSize.w * 0.988,
            top: (this.gameSize.h / 2) - (this.rightGoalBoxSize.h / 2)
        }

        this.init()
    }

    init() {

        this.rightGoalBoxElement = document.createElement('div')


        this.rightGoalBoxElement.style.backgroundColor = `#0060BA`

        this.rightGoalBoxElement.style.position = 'absolute'
        this.rightGoalBoxElement.style.zIndex = '11'

        this.rightGoalBoxElement.style.width = `${this.rightGoalBoxSize.w}px`
        this.rightGoalBoxElement.style.height = `${this.rightGoalBoxSize.h}px`

        this.rightGoalBoxElement.style.top = `${this.rightGoalBoxPos.top}px`
        this.rightGoalBoxElement.style.left = `${this.rightGoalBoxPos.left}px`

        this.gameScreen.appendChild(this.rightGoalBoxElement)

    }
}



