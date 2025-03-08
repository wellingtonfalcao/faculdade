document.querySelector("#title").textContent = "Exercício 11: Formulário Interativo";
/*

11 - Formulário Interativo

Objetivo: 
Exibir o texto digitado em um campo de entrada.

Requisitos:
Crie um campo de texto (input type="text") e um botão de envio.
O texto digitado deve ser exibido abaixo do formulário:
Com o clique no botão de envio.
Ou ao pressionar uma tecla específica (à sua escolha).


*/
let btMostrar = document.querySelector("#bt-mostrar");
let input = document.querySelector("#input");
let mensagem = document.querySelector("#mensagem");

//Função que será repetida nos eventos
function exibirMensagem () {
      if(input.value.trim() === ""){
        mensagem.style.display = "inline";
        mensagem.style.backgroundColor = "red";
        mensagem.innerText = "Digite um valor válido";
    } else {
        mensagem.style.display = "inline";
        mensagem.style.backgroundColor = "green";
        mensagem.textContent = input.value;
        input.value = "";
    }
}

// Mostrar mensagem ao clicar no button
btMostrar.addEventListener("click", exibirMensagem);

// Mostrar mensagem ao apertar Enter
input.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        exibirMensagem();
    }
});



