const elementoDistancia = document.querySelector('#distancia');
const elementoConsumo = document.querySelector('#consumo');
const elementoPreco = document.querySelector('#preco');
const custoDaViagem = document.querySelector('#resultado_custo');

const distancia = elementoDistancia.value;
const consumo = elementoConsumo.value;
const preco = elementoPreco.value;

function calcularGasolina() {
    
    let custoViagem = (distancia/consumo)*preco;
    custoDaViagem.innerHTML = `
    R$${custoViagem.toFixed(2)}
    `
}