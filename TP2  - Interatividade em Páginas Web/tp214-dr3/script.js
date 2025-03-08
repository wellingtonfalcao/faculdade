document.querySelector("#title").textContent = "Exercício 14: Troca de Classes";
/*

14 Grupo - Troca de Classes

Objetivo: 
Alternar as classes dos elementos de uma tabela dinamicamente.

Requisitos:
No HTML crie uma tabela com 4 colunas preenchidas com o nome e a idade de 4 pessoas fictícias.

Nas linhas pares adicione a classe "vermelho" que coloca a cor de fundo com a cor vermelha. 
Nas linhas ímpares adicione a classe "azul" que coloca a cor de fundo com a cor azul.

No script.js, inverta as classes dos itens da tabela:
Elementos com classe azul devem receber a classe vermelho.
Elementos com classe vermelho devem receber a classe azul.
Obs: Não altere o arquivo index.html manualmente. Utilize o DOM para todas as alterações.

*/

let linhaAzul = document.querySelectorAll(".azul");
let linhaVermelha = document.querySelectorAll(".vermelho");

//Criei um intervalo de 2s para ver a mudanca via script
setInterval(mudarCorLinha, 2000);

function mudarCorLinha() {
  linhaAzul.forEach((linha) => {
    linha.classList.remove("azul");
    linha.classList.add("vermelho");
  });

  linhaVermelha.forEach((linha) => {
    linha.classList.remove("vermelho");
    linha.classList.add("azul");
  });
}
