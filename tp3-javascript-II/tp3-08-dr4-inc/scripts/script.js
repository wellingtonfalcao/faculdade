let tituloHTML = document.querySelector("#title");
tituloHTML.textContent = "Exercício 8: - Contador de Vogais";

/* 

Exercício 8 Lista de Compras - Parte 2

Crie uma nova aplicação copiando os códigos da questão anterior e inclua um botão em cada item para excluí-lo. 


Observações:

Crie a função excluir.
Utilize splice para excluir o item da lista.
Utilize template de string para facilitar a criação da linha com o item no HTML.

*/

//Array de produtos
let listaProdutos = [];

let produto = document.querySelector("#input-produto");
let btAdicionar = document.querySelector("#bt-adicionar");
let btExcluir = document.createElement("button").textContent = "Excluir";

btAdicionar.addEventListener("click", () => {
    adicionarProduto(produto.value, listaProdutos);
    mostrarProdutos(listaProdutos, "#lista-produtos", "li");
    produto.value = "";
});





