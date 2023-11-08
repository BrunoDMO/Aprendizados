import operacao from "./operacao.js";

const robotron = document.querySelector(".robotron");
const controleAjuste = document.querySelectorAll("[data-operacao]");

controleAjuste.forEach( (elemento) =>{
    elemento.addEventListener("click", (evento) =>{
        //text = evento.target.textContent
        //input = evento.target.Value
        operacao(evento.target.textContent, evento.target.parentNode);

    })
})


























robotron.addEventListener("click", () => {
    return console.log("Robo Clicado Anônimamente");
})

robotron.addEventListener("click", consoleLog);

function consoleLog() {
    return console.log("Robo clicado");
}


// //tirando Vermelho
// var lista = ["Laranja", "Vermelho", "Branco", "Amarelo", "Rosa"]; 

// function tiraVermelho(lista){
//     lista.splice(1,1);
//     console.log(lista);
// }
// tiraVermelho(lista);
