document.querySelector("#title").textContent = "Exercício 7: Texto Exibido com Atraso (onload)";
/*

7 - Texto Exibido com Atraso (onload)

Objetivo: 
Exibir um parágrafo 5 segundos após o carregamento da página.

Requisitos:
Utilize JavaScript para implementar um atraso de 5 segundos antes de exibir o texto.

*/

// Usando create para criar a tag <p> e seus atributos
const paragrafo = document.createElement("p");
paragrafo.textContent = "Carregando texto...";

//Adicionar evento para carregar onload via addEventListener
window.addEventListener("load", () => {
    document.body.appendChild(paragrafo);
    setInterval(() => {
        paragrafo.textContent = "Texto carregado com sucesso!";
    }, 5000)//Intervalo de 5 segundos para exibir texto.
})



