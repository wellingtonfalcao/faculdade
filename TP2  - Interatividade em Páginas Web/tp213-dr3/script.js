document.querySelector("#title").textContent = "Exercício 13: Modal";
/*

13 Grupo - Modal

Objetivo: 
Implementar um modal que pode ser exibido e ocultado com interações via DOM.

Requisitos:
Crie uma div de id "modal" com um elemento h3 de conteúdo "Modal" e uma imagem de id "close".

No script.js, adicione a classe hide ao elemento <div> com o id "modal".

No arquivo style.css, defina a classe hide para que a div se torne invisível.

Ao clicar no botão (<button>), chame uma função que mostre o modal.
Ao clicar na imagem com id "close" dentro da modal, oculte o modal novamente.
Obs: Toda manipulação deve ser feita com o DOM.

*/

let modal = document.querySelector("#modal");
let imagem = document.querySelector("#close");  
modal.classList.add("hide");

let botao = document.createElement("button");
botao.textContent = "Mostrar modal";
document.body.appendChild(botao);

botao.addEventListener("click", () => {
    modal.classList.remove("hide");
    botao.classList.add("hide");
})

imagem.addEventListener("click", () => {
    modal.classList.add("hide");
    botao.classList.remove("hide");
})

