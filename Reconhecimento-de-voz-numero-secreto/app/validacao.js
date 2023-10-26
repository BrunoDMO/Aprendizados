function verificaSeOChuteEValido(chute) {
    chuteString = chute.toString();
    const trataNumero = chute.replace(".", "");
    const numero = parseInt(trataNumero);
    console.log(numero);

    if (chuteforInvalido(numero)) {
        console.log(`${numero} é um Valor inválido`);
        elementoChute.innerHTML += `
        Valor Inválido
        `
    } else if (!(numeroForMaiorOuMenorQueOValorPermitido(numero))) {
        elementoChute.innerHTML += `Valor fora dos limites: ${menorValor} a ${maiorValor}`
        //`
        // <div>Você disse:</div>
        // <span class="box">${numero}</span>
        // Valor fora dos limites: ${menorValor} a ${maiorValor}
        // `
    } else{
        elementoChute.innerHTML += confereNumero(chute);
    }
}

function confereNumero(numero) {
    if (numero < numeroSecreto) {
        mensagem = `<div>O numero secreto é maior <i class="fa-solid fa-angles-up"></i> </div>` 
        return mensagem;

    } else if (numero > numeroSecreto) {
        mensagem = `<div>O numero secreto é menor <i class="fa-solid fa-angles-down"></i> </div>`
        return mensagem;

    }   else{
        mensagem = `<div>Você Acertou o Número Secreto</i> </div>`
        return mensagem;
    }
}

function chuteforInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    if (numero > maiorValor || numero < menorValor) {
        console.log(`Valor fora dos limites: ${menorValor} a ${maiorValor}`);
        return false;
    } else {
        return true;
    }
}
