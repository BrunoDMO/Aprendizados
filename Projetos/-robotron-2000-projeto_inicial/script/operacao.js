export default function operacao(operacao, parte){
    operacao === "subtrair"? subtrair(parte): 
    operacao === "somar"? somar(parte):
    none; 
}

function somar(parte){
    parte.value = parseInt(parte.value) + 1;
}

function subtrair(parte){
    parte.value = parseInt(parte.value) - 1;
}