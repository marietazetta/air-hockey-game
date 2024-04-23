window.onload = () => Game.init() // A falta de botón, tenemos el inicializador directamente en cuanto abra la página.


function showToast(message) {
    console.log("showToast called!");

    let toastCard = document.querySelector('#toast')
    toastCard.classList.add("show")


    const timeoutID = setTimeout(() => {
        toastCard.classList.remove("show")

    }, 3000)

}