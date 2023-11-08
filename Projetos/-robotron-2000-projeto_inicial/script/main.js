const robotron = document.querySelector(".robotron");

robotron.addEventListener("click", ()=>{
    return console.log("Robo Clicado Anônimamente");
})

robotron.addEventListener("click", consoleLog);

function consoleLog() {
    return console.log("Robo clicado");
}
