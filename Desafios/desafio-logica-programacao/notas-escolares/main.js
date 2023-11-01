const linguagem = document.querySelector('#linguagem').value;
const matematica = document.querySelector('#matematica').value;
const cienciasHumanas = document.querySelector('#humanas').value;
const cienciasDaNatureza = document.querySelector('#natureza').value;
const redacao = document.querySelector('#redacao').value;
const total = document.querySelector('#resultado_nota');

function calcularNota() {

    let pesoLinguagem = 1;
    let pesoMatematica = 2;
    let pesoHumanas = 1;
    let pesoNatureza = 4;
    let pesoRedacao = 2;

    let notaPonderadaLinguagem = linguagem * pesoLinguagem;
    let notaPonderadaMatematica = linguagem * pesoLinguagem;
    let notaPonderadaHumanas = linguagem * pesoLinguagem;
    let notaPonderadaNatureza = linguagem * pesoLinguagem;
    let notaPonderadaRedacao = linguagem * pesoLinguagem;

    let notaFinal = (notaPonderadaLinguagem + notaPonderadaMatematica + notaPonderadaHumanas + notaPonderadaNatureza + notaPonderadaRedacao) / (pesoLinguagem + pesoMatematica + pesoHumanas + pesoNatureza + pesoredacao))


    total.innerHTML = `
    ${notaFinal.toFixed(2)} pontos
    `

}


//(elemento * peso)/ soma dos pesos