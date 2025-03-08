document.querySelector("#title").textContent = "Exercício 16: Condições";
/*

16 Grupo - Acordeão

Objetivo: 
Implementar um accordion que exibe e esconde conteúdo de forma dinâmica.

Requisitos:

No script.js:
Torne todas as tags <p> invisíveis no estado inicial.
Adicione uma classe no CSS para ocultar o conteúdo.
Ao clicar em uma <div> com a classe "accordion-item":
Mostre o conteúdo da <div> clicada.
Esconda o conteúdo das outras <div> de classe "accordion-item", se houver alguma aberta.
Se a <div> clicada já estiver com o conteúdo visível, oculte-o novamente.

*/

// Oculta todos os <p> via JS com DOM;
let paragrafos = document.querySelectorAll("p");
paragrafos.forEach( p => p.classList.add("hide"));

//Seleciona a class da <div> chamada .accordion-item
let divs = document.querySelectorAll(".accordion-item");
divs.forEach( (div, i) => {
    div.addEventListener("click", () => { // Operador ternário para testar a condição
      paragrafos.forEach( (p,j) => i !== j ? p.classList.add("hide") : p.classList.toggle("hide"));
    })
});

