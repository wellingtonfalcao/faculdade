document.querySelector("#title").textContent = "Exercício 12: Adicionando Itens";
/*

12 - Grupo - Adicionando Itens

Objetivo: 
Criar um botão que, ao ser clicado, adicione novos itens a uma lista de forma dinâmica.

Requisitos:
- Crie uma lista de id="lista" no HTML.

No arquivo script.js:
- Crie um elemento <button> com o texto "Inserir" e atribua uma função de clique a ele.
- Adicione o botão ao <body> utilizando append.

Ao clicar no botão:
- Crie um elemento <li> com o texto "Nova entrada".
- Adicione o <li> criado como filho do elemento <ul> com o id "lista".

Obs: Não altere o arquivo index.html manualmente. Use apenas o DOM para manipulação.



*/

//Seleciona o elemento de id lista no HTML ( que é um <ul> );
let lista = document.querySelector("#lista");
let botao = document.createElement("button");
botao.textContent = "Inserir";

//Cria um botão dentro do <body>;
document.body.appendChild(botao);

// Cria uma função de evento onclick que faz inserção de um <li> a cada interação.
botao.addEventListener("click", () => {
    let item = document.createElement("li");
    item.textContent = "Nova entrada";
    lista.prepend(item);
})




