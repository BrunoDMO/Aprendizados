import operacao from "./operacao.js";
import { atualizaEstatistica } from "./estatisticas.js";

const robotron = document.querySelector(".robotron");
const controleAjuste = document.querySelectorAll("[data-modificador]");


controleAjuste.forEach( (elemento) =>{
    elemento.addEventListener("click", (evento) =>{
        const peca = evento.target.dataset.pecas;
        const modificacao = evento.target.dataset.modificador;
        const nodePai = evento.target.parentNode;
        //text = evento.target.textContent
        //input = evento.target.Value
        operacao(modificacao, nodePai);
        atualizaEstatistica(peca, modificacao, nodePai);
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
