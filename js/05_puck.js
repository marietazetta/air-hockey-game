class Puck {
    constructor(gameScreen, gameSize) {
        this.gameScreen = gameScreen;
        this.gameSize = gameSize;

        this.hasStarted = false

        this.puckSize = {
            w: 100,
            h: 100
        };
        this.puckPos = {
            left: (this.gameSize.w / 2) - (this.puckSize.w / 2),
            top: (this.gameSize.h / 2) - (this.puckSize.h / 2)
        };

        this.setInitialPos()

        this.puckPhysics = {
            speed: {
                top: 15,
                left: 15
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

    init() {
        this.puckElement = document.createElement('div')



        this.puckElement.style.backgroundImage = "url('img/puck.png')"
        this.puckElement.style.backgroundSize = "contain"
        this.puckElement.style.backgroundRepeat = "no-repeat"

        this.puckElement.style.position = 'absolute'
        this.puckElement.style.zIndex = '10'

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

        if (this.hasStarted) {

            this.puckPos.top += this.puckPhysics.speed.top
            this.puckPos.left += this.puckPhysics.speed.left

            this.checkBordersCollision()
            this.updatePos()
        }

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
            this.hasStarted = true
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
            this.hasStarted = true
        }
    }

    checkCollisionWithRightGoalBox(rightGoalBox) {
        if (this.puckPos.left + this.puckSize.w > rightGoalBox.rightGoalBoxPos.left) {
            Game.goalsound.play()
            this.reset()
            this.hasStarted = false
            let currentScore = Number(Game.score.scoreElement.innerText) + 1
            currentScore === 5 && location.reload()
            Game.score.scoreElement.innerText = currentScore
        }
    }
    checkCollisionWithLeftGoalBox(leftGoalBox) {
        if (this.puckPos.left < leftGoalBox.leftGoalBoxPos.left + leftGoalBox.leftGoalBoxSize.w) {
            Game.goalsound.play()
            this.reset()
            this.hasStarted = false
            let currentScore2 = Number(Game.score2.score2Element.innerText) + 1
            currentScore2 === 5 && location.reload()
            Game.score2.score2Element.innerText = currentScore2
        }
    }




    updatePos() {
        this.puckElement.style.top = `${this.puckPos.top}px`
        this.puckElement.style.left = `${this.puckPos.left}px`
    }


}