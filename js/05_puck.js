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

        this.puckPhysics = { // Cambios
            speed: {
                top: 400,
                left: 400
            },
            gravity: .9
        };

        this.init()
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

    move() {
        // TEST 1
        // this.puckPos.top += this.puckSpeed.top
        // this.puckPos.left += this.puckSpeed.left

        // EJEMPLO VÍDEO PELOTITA
        this.puckPos.left += this.puckPhysics.speed.left
        this.puckPos.top += this.puckPhysics.speed.top

        // Gravity !!!!
        this.puckPhysics.speed.top += this.puckPhysics.gravity
        this.puckPhysics.speed.left += this.puckPhysics.gravity // A dos lados ?

        // Faltan colisiones


        // Para que no se salga de la pantalla, nuestro checkBordersCollision()
        this.puckPos.top = Math.max(0, Math.min(this.gameSize.h - this.puckSize.h, this.puckPos.top))
        this.puckPos.left = Math.max(0, Math.min(this.gameSize.w - this.puckSize.w, this.puckPos.left))

        this.updatePos()
    }

    // CUIDAO 🔥 Lógicas de los mullet
    // moveUp() {
    //     this.puckPos.top = Math.max(0, this.puckPos.top - this.puckSpeed.top)
    //     this.updatePos()
    // }

    // moveDown() {
    //     this.puckPos.top = Math.min(this.gameSize.h - this.puckSize.h, this.puckPos.top + this.puckSpeed.top)
    //     this.updatePos()
    // }

    // moveLeft() {
    //     this.puckPos.left = Math.max(0, this.puckPos.left - this.puckSpeed.left)
    //     this.updatePos()
    // }

    // moveRight() {
    //     this.puckPos.left = Math.min(this.gameSize.w - this.puckSize.w, this.puckPos.left + this.puckSpeed.left)
    //     this.updatePos()

    // }

    // updatePos() {
    //     this.puckElement.style.top = `${this.puckPos.top}px`;
    //     this.puckElement.style.left = `${this.puckPos.left}px`;
    // }
}