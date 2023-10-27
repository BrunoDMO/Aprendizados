//Pra usar nodejs, para API dos videos
//https://www.alura.com.br/artigos/como-instalar-node-js-windows-linux-macos?_gl=1*148j2xj*_ga*MTY2MDU5NzczNy4xNjkxODU1NjM1*_ga_1EPWSW3PCS*MTY5ODQzNDg2NS40NS4wLjE2OTg0MzQ4NjUuMC4wLjA.*_fplc*SW9VYjdWRGxNbjZ1bnNwJTJCTE9KVzVXdUpCckNwNHpEbTg0UXF3bjNSbEJUeFkwZTE2UmtSRyUyRkhqR2RNV0pvbG84MDVCb1pWJTJGMjk4VDR2bE5MQ2dJb1JBaG5pYUwyYURqSUVORDByb0lIS0pIa1M5cGVIT1dzTEhjZVVqY2JRJTNEJTNE
//npm install -g json-server
//json-server --watch backend/videos.json

const containerVideos = document.querySelector(".videos__container");

const api = fetch("http://localhost:3000/videos")
.then((res) => res.json())
.then((videos) =>
    videos.forEach((video) => {
        containerVideos.innerHTML += `
        <li class ="videos__item">
            <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>   
            <div class ="descricao-video">
                <img class ="img-canal" src="${video.imagem} alt = "logo do canal">
                <h3 class="titulo-video">${video.titulo}</h3>
                <p class="titulo-canal">${video.descricao}</p>
            </div>
        </li>
        `
    })

)
.catch((error)=>{
    containerVideos.innerHTML = `
    <p> Houve um erro ao carregar os videos: ${error}</p>
    `
})