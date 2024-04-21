class Background {

    constructor(gameScreen, gameSize) {

        this.gameScreen = gameScreen
        this.backgroundSize = { w: gameSize.w, h: gameScreen.h }

        this.init()
    }

}