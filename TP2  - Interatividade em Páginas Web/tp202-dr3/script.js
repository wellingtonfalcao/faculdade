document.querySelector("#title").textContent = "Exercício 2: Alteração de Texto de um Parágrafo com Clique";
/*

2 - Alteração de Texto de um Parágrafo com Clique

Objetivo: Criar uma página web que altere o conteúdo de um parágrafo ao clicar em um botão.

Requisitos:
Crie um <p> em HTML com qualquer texto inicial.
Ao clicar no botão, o texto do parágrafo deve ser substituído por outro.

*/

// Script para alterar conteúdo do <p>
document.querySelector("#bt").addEventListener("click",()=>{
    let paragrafo = document.querySelector("p");
    paragrafo.textContent = "Novo texto do parágrafo";
})