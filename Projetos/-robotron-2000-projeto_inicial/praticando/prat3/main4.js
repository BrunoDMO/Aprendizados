// const tipo = document.querySelectorAll("[data-ver]");
// const lista = document.querySelector(".lista");
// const item = document.querySelectorAll(".item");


// tipo.forEach((elemento) => {
//     elemento.addEventListener("click", (evento) => {
//         modificadorVisual(evento.target.dataset.ver);
//     })
// })

// function modificadorVisual(modificacao) {
//     modificacao == "mostrar" ? mostrarTintas() : modificacao == "ocultar" ? ocultarTintas() : NaN;
// }

// function mostrarTintas() {
//     item.forEach((elemento) => {
//         elemento.style.display = "block";
//     })
// }
// function ocultarTintas() {
//     item.forEach((elemento) => {
//         elemento.style.display = "none";
//     })
// }




const lista = document.querySelector(".lista");
const tipo = document.querySelectorAll("[data-ver]");
tipo.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        modificadorVisual(evento.target.dataset.ver);
    })
})
function modificadorVisual(modificacao) {
    modificacao == "mostrar" ? lista.style.display = "block" :
     modificacao == "ocultar" ? lista.style.display = "none" :
      NaN;
}

// const lista = document.querySelector(".lista");
// document.querySelector("#botao").addEventListener("click", () => {
//   lista.setAttribute("data-lista", "mostrar");
// });

// document.querySelector(".close").addEventListener("click", () => {
//   lista.setAttribute("data-lista", "esconder");
// });