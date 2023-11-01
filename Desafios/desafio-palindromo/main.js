const input = document.querySelector('#input');

input.addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
        essaPalavraEUmPalindromo(input.value)
    }
});

function essaPalavraEUmPalindromo(palavra){
    let separandoLetras = palavra.split('');
    let palavraInvertida = separandoLetras.reverse();
    palavraInvertida = palavraInvertida.join(""); //junta array em uma string
    console.log(palavra + " " + palavraInvertida);
    palavraInvertida == palavra ? console.log(`A palavra ${palavra} é um palindromo`) : console.log(`A palavra ${palavra} não é um palindromo`)
}
