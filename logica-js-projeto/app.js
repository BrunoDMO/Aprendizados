alert('Este é jogo do número secreto');
let numeroMax = 100;
let numeroSecreto = parseInt(Math.random() * numeroMax) + 1;
console.log(`O numeroSecreto é ${numeroSecreto}`);
let numeroChute;
let tentativas = 1;

while (numeroChute != numeroSecreto) {
    numeroChute = prompt(`Digite um número de 1 - ${numeroMax}`);

    if (numeroChute == numeroSecreto) {
        break;

    } else {
        if (numeroChute < numeroSecreto) {
            alert(`O numero secreto é maior que ${numeroChute}`);
        } else {
            alert(`O numero secreto é menor que ${numeroChute}`);

        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`O número secreto foi descoberto(${numeroSecreto} em ${tentativas} ${palavraTentativa})`)