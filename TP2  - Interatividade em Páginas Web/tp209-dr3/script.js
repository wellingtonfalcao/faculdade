document.querySelector("#title").textContent = "Exercício 9: Botão com Múltiplos Eventos";
/*

9 - Botão com Múltiplos Eventos

Objetivo: 
Implementar múltiplos eventos em um único botão.

Requisitos:
Ao clicar uma vez, exiba uma mensagem qualquer.
Ao dar um duplo clique, mude a cor de fundo do botão.

*/

let botao = document.querySelector("#botao");
let flag = false; //variavel de controle 


// Ao clicar cria o elemento <p> com um conteúdo
botao.addEventListener("click", () => {
    
    if(!flag){ // Condicional para evitar que o se adicione mais de um no child.
        let mensagem = document.createElement("p");
        mensagem.textContent = "Aqui um texto quando o botão clicado uma vez"
        document.body.appendChild(mensagem);
        flag = true; 
    }
    
});

// Ao clicar duas vezes muda o estilo do botão
botao.addEventListener("dblclick", () => {
    botao.style.backgroundColor = "red";
    botao.style.color = "white";
});