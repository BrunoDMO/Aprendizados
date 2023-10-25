const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = "en-US";



document.body.onclick = () => {
    recognition.start();
    console.log("Ready to receive a number command.");
};

recognition.addEventListener('result', onSpeak);

const oqueFoiDito = document.querySelector('.box');
function onSpeak(event) {
    chute = event.results[0][0].transcript;
    //console.log(chute);
    exibeChuteNaTela(chute);
    verificaSeOChuteEValido(chute);
}

const elementoChute = document.querySelector('#chute');
function exibeChuteNaTela(chute) {
    chuteString = chute.toString();
    const trataNumero = chute.replace(".", "");
    const numero = parseInt(trataNumero);


    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${numero}</span>
        ${confereNumero(numero)}
        `
}




