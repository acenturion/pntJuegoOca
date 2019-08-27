function getNumero(){
    document.querySelector("#numero-dado").innerHTML = Math.floor(Math.random() * 6) + 1 ;
}

function addPlayer(){
    document.querySelectorAll(".casilla")[0].classList.add("player")
}