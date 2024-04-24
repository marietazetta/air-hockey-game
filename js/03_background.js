class Background {
    constructor(gameScreen, gameSize) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize
        this.init()
    }

    init() {
        const backgroundElement = document.createElement('div')

        backgroundElement.style.position = 'absolute'

        backgroundElement.style.width = `${this.gameSize.w}px`
        backgroundElement.style.height = `${this.gameSize.h}px`

        backgroundElement.style.backgroundImage = "url('./img/AIR HOCKEY TABLE 2.png')"

        backgroundElement.style.backgroundSize = "100% 100%"
        backgroundElement.style.backgroundRepeat = "no-repeat"
        backgroundElement.style.backgroundPosition = "center center"


        this.gameScreen.appendChild(backgroundElement)
    }
}