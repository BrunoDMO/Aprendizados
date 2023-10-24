const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();


recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;


document.body.onclick = () => {
    recognition.start();
    console.log("Ready to receive a number command.");
};

recognition.addEventListener('result', onSpeak);

const oqueFoiDito = document.querySelector('.box');
function onSpeak(event){
    chute = event.results[0][0].transcript;
    console.log(chute);
    exibeChuteNaTela(chute);
   
}

const elementoChute = document.querySelector('#chute');
function exibeChuteNaTela(chute){
    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
    `;
}




