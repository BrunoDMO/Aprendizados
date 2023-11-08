import operacao from "./operacao.js";

const robotron = document.querySelector(".robotron");
const bracoSubtrair = document.querySelector("[subtrair]");
const bracoSomar = document.querySelector("[somar]");
const braco = document.querySelector("[braco]");

bracoSomar.addEventListener("click", () =>{operacao("somar",braco)});
bracoSubtrair.addEventListener("click", () =>{operacao("subtrair",braco)});


const controleAjuste = document.querySelector(".controle-ajuste");
controleAjuste.addEventListener("click", (evento)=>{console.log(evento)});








robotron.addEventListener("click", () => {
    return console.log("Robo Clicado Anônimamente");
})

robotron.addEventListener("click", consoleLog);

function consoleLog() {
    return console.log("Robo clicado");
}
