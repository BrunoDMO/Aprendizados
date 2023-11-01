console.log('Bem Vindo');
let nome = 'Bruno';
let text = `Olá, ${nome}!`
console.log(text);
alert(text);

let resposta = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(`Você respondeu que é ${resposta}`);

let valor1 = 2;
let valor2 = 1;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);
resultado = valor1 - valor2;
console.log(`A subtração de ${valor1} e ${valor2} é igual a ${resultado}.`);

let idade = prompt('insira sua idade');

if (idade > 18) {
    console.log('If = Maior de idade');
} else {
    console.log('If = Menor de idade');
}

let maiorDeIdade = idade > 18 ? 'Maior de idade' : 'Menor de idade';
console.log('Operador Ternario = ' + maiorDeIdade);

let numero = prompt('insira um número');
if (numero > 0) {
    console.log('número positivo');
} else if (numero == 0) {
    console.log('número é zero');
} else {
    console.log('número negativo');
}

let contador = 1;

while (contador < 11){
    console.log(`${contador}`);
    contador++;
}

let nota = 7;
if (nota >= 7){
    console.log('Aprovado');
} else {
    console.log('Reprovado');
}

let randomNumero = parseInt(Math.random() * 10) + 1;
console.log('1 - 10 = ' + randomNumero);
randomNumero = parseInt(Math.random() * 1000) + 1;
console.log('1 - 1000 = ' + randomNumero);