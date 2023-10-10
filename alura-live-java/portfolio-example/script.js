console.log("olá mundo");

const imagemFlutuante = document.querySelector('#imagem-flutuante')
const elementoMaquinaEscrever = document.querySelector(".typewriter")
const texto = "Halo! Saya Gunawan. Seorang";
let direcao = 1;
let distancia = 10;

let indice =0;

function escreverTexto (){
    if(indice <texto.length){
        elementoMaquinaEscrever.textContent += texto.charAt(indice);
        indice++
        setTimeout(escreverTexto, 100)
    }
}

function animarFlutuacao () {
    imagemFlutuante.style.transform = `translateY(${distancia}px)`

    if(distancia === 10) {
        direcao = -1;
    } else if (distancia === -10){
        direcao = 1;
    }
    
    distancia += direcao
}


setInterval(animarFlutuacao, 45);
window.addEventListener('load', escreverTexto);