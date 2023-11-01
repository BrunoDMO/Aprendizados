function calcularSalario() {
    let salarioBruto = document.querySelector('#salario_bruto').value;
    let dependentes = document.querySelector('#dependentes').value;

    let inss = 0;

    let limiteFaixa1 = 1302;
    let limiteFaixa2 = 2571.29;
    let limiteFaixa3 = 3856.94;
    let limiteFaixa4 = 7507.49;

    const limitesFaixa = [limiteFaixa1,limiteFaixa2,limiteFaixa3,limiteFaixa4];

    let valorFaixa1 = limiteFaixa1 * 0.075;
    let valorFaixa2 = (limiteFaixa2 - limiteFaixa1) * 0.09;
    let valorFaixa3 = (limiteFaixa3 - limiteFaixa2) * 0.12;


    if( salarioBruto > limiteFaixa4){
        inss = 0.14 * limiteFaixa4;

    }else if (salarioBruto <= limiteFaixa1) {
        inss = salarioBruto * 0.075;

    } else if (salarioBruto <= limiteFaixa2) {
        inss = valorFaixa1 + ((salarioBruto - limiteFaixa1) * 0.09);

    } else if (salarioBruto <= limiteFaixa3) {
        inss = valorFaixa1 + valorFaixa2 + ((salarioBruto - limiteFaixa2) * 0.12);

    } else if (salarioBruto <= limiteFaixa4) {
        inss = valorFaixa1 + valorFaixa2 + valorFaixa3 + ((salarioBruto - limiteFaixa3) * 0.14);

    }

    let aliquota = 0;
    let deducao = 0;

    if (salarioBruto > 1903.98) {
        if (salarioBruto <= 2826.65) {
            aliquota = 0.075;
            deducao = 142.80;
        } else if (salarioBruto <= 3751.06) {
            aliquota = 0.15;
            deducao = 354.80;
        } else if (salarioBruto <= 4664.68) {
            aliquota = 0.225;
            deducao = 636.13;
        } else if (salarioBruto > 4664.68){
            aliquota = 0.30;
            deducao = 869.36;
        }
    }
    let baseCalculoIRRF = salarioBruto - inss - (dependentes * 189.59)
    let irrf = (baseCalculoIRRF * aliquota) - deducao;

    let salarioLiquido = salarioBruto - (irrf + inss);

    alert('Seu Salario líquido é: R$ ' + salarioLiquido.toFixed(2) + ' O INSS é de: R$'  + inss.toFixed(2) + ' O Imposto de Renda é de: R$ ' + irrf.toFixed(2));



}