let tituloHTML = document.querySelector("#title");
tituloHTML.textContent = "Exercício 6: - Contador de Vogais";

/* 

Exercício 7: Lista de Compras - Parte 1

Crie uma aplicação com o layout sugerido abaixo que permita ao usuário incluir itens em uma lista de compras.


Observações:

Crie funções incluir e mostrarLista.
Utilize um array para guardar os itens da lista.

*/

//Array de produtos
let listaProdutos = [];

let produto = document.querySelector("#input-produto");
let btAdicionar = document.querySelector("#bt-adicionar");

btAdicionar.addEventListener("click", () => {
    adicionarProduto(produto.value, listaProdutos);
    mostrarProdutos(listaProdutos, "#lista-produtos", "li");
    produto.value = "";
});





