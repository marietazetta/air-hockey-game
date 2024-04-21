class Puck {
    constructor(gameScreen, gameSize) { // No estaba pasando gameScreen como parámetro.
        this.gameScreen = gameScreen;
        this.gameSize = gameSize;

        this.puckSize = {
            w: 100,
            h: 100
        };
        this.puckPos = {
            left: (this.gameSize.w / 2) - (this.puckSize.w / 2),
            top: (this.gameSize.h / 2) - (this.puckSize.h / 2)
        };

        this.init();
    }


    init() { // DOM, estilos y propiedades.
        this.puckElement = document.createElement('div') // Creamos en el DOM.

        // this.puckElement.src = 'img.png' 

        this.puckElement.style.backgroundColor = `black` // Color.
        this.puckElement.style.borderRadius = `50%` // Redondel del Puck.

        this.puckElement.style.position = 'absolute' // De esta forma el puck está por encima del background.

        this.puckElement.style.width = `${this.puckSize.w}px`
        this.puckElement.style.height = `${this.puckSize.h}px`

        this.puckElement.style.top = `${this.puckPos.top}px`
        this.puckElement.style.left = `${this.puckPos.left}px`

        this.gameScreen.appendChild(this.puckElement)
    }
}