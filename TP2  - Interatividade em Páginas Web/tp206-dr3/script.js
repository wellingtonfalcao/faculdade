document.querySelector("#title").textContent = "Exercício 6: Exibição de Imagem ao Carregar a Página (onload)";
/*

6 - Exibição de Imagem ao Carregar a Página (onload)

Objetivo: 
Exibir uma imagem e uma mensagem ao carregar a página.

Requisitos:
Ao carregar a página, exiba uma foto qualquer e
um parágrafo com a mensagem "Imagem carregando...".

*/

// Usando create para criar a tag <img> e seus atributos
const imagem = document.createElement("img");
imagem.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/JUNO_-_PIA13746.jpg/1200px-JUNO_-_PIA13746.jpg";
imagem.title = "Sonda Juno em Júpiter";

// Usando create para criar a tag <p> e seus atributos
const paragrafo = document.createElement("p");
paragrafo.textContent = "Imagem carregando...";

//Adicionar evento para carregar onload via addEventListener
window.addEventListener("load", () => {
    setInterval(() => {
        document.body.appendChild(imagem);
        paragrafo.textContent = "Imagem carregada com sucesso!";
    }, 3000)//Intervalo de 3segundos para exibir simulando carregamento.
    document.body.appendChild(paragrafo);
})



