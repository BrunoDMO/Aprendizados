const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

const estatisticas = document.querySelectorAll("[data-estatistica]");

export function atualizaEstatistica(pecaClicada, operador, peca) {
    const contador = peca.querySelector("[data-contador]");
    if (operador === "+") {
        somaEstastisticas(pecaClicada);
    }
    if (operador === "-" && contador.value >= 0) {
        subtraiEstatisticas(pecaClicada);
    }
}

function verificaEstatistica(){
    // verifica quantos equipamentos estão no zero.
    const contadores = document.querySelectorAll("[data-contador]");
    let zeros = 0;
    contadores.forEach((elemento) =>{
        elemento.value == 0? zeros = zeros + 1 : NaN;
    })
    return zeros;
}

function somaEstastisticas(pecaClicada) {
    estatisticas.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[pecaClicada][elemento.dataset.estatistica]
    })
}
function subtraiEstatisticas(pecaClicada) {
    estatisticas.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) - pecas[pecaClicada][elemento.dataset.estatistica];
        verificaEstatistica() == 5? statsReset(): NaN;
    })
}

export function statsReset(){
    const contadores = document.querySelectorAll("[data-contador]");
    contadores.forEach((elemento) =>{
        elemento.value = "00";
    })
    estatisticas.forEach((elemento) => {
        elemento.textContent = "000";
        
    })
}