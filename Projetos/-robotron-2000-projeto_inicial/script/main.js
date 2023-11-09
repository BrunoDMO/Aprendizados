import operacao from "./operacao.js";
import { atualizaEstatistica, statsReset } from "./estatisticas.js";

const robotron = document.querySelector(".robotron");
const controleAjuste = document.querySelectorAll("[data-modificador]");


controleAjuste.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        const peca = evento.target.dataset.pecas;
        const modificacao = evento.target.dataset.modificador;
        const nodePai = evento.target.parentNode;
        //text = evento.target.textContent
        //input = evento.target.Value
        operacao(modificacao, nodePai);
        atualizaEstatistica(peca, modificacao, nodePai);
    })
})

document.querySelector("#resetButtom").addEventListener("click", () => {
    statsReset();
})



const robos = [
    "./img/Robotron 2000 - Amarelo/Robotron 2000 - Amarelo.png",
    "./img/Robotron 2000 - Branco/Robotron 2000 - Branco.png",
    "./img/Robotron 2000 - Preto/Robotron 2000 - Preto.png",
    "./img/Robotron 2000 - Rosa/Robotron 2000 - Rosa.png",
    "./img/Robotron 2000 - Vermelho/Robotron 2000 - Vermelho.png",
    "./img/Robotron 2000 - Azul/Robotron 2000 - Azul.png"
]
const robo = document.querySelector(".robo")
let n = 0;
robotron.addEventListener("click", () => {
    robo.src = robos[n];
    n++;
    n == 6 ? n = 0 : n = n;
})

// //tirando Vermelho
// var lista = ["Laranja", "Vermelho", "Branco", "Amarelo", "Rosa"];

// function tiraVermelho(lista){
//     lista.splice(1,1);
//     console.log(lista);
// }
// tiraVermelho(lista);
