export default function operacao(operacao, parte){
    const contador = parte.querySelector(".controle-contador");

    operacao === "-"? subtrair(contador): //operador ternario
    operacao === "+"? somar(contador):
    NaN; 

    contador.value < 0 ? contador.value = 0 : NaN;
}

function somar(contador){
    contador.value = parseInt(contador.value) + 1;
}

function subtrair(contador){
    contador.value = parseInt(contador.value) - 1;
}