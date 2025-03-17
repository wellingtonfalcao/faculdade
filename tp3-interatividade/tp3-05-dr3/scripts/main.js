let tituloHTML = document.querySelector("#title");
tituloHTML.textContent = "Exercício 5: - Formulário com Mensagem de Agradecimento";

//import { gerarNumeros } from "./func-random.js";
//import { sortNumberAsc } from "./func-ordenacao.js";
//import { numeroIntervalo } from "./func-validacao.js";
//import { numeroIntervalo } from "./func-produtos.js";

/* 

5 Formulário com Mensagem de Agradecimento

Crie no arquivo HTML um formulário que solicite o nome e o e-mail do usuário. 
Ao enviar o formulário, exiba uma mensagem de agradecimento com as informações fornecidas em um alerta.

*/

let select = document.querySelector("#opcoes");
let mensagem = document.querySelector("#mensagem");


select.addEventListener("focus", () => {
  mensagem.textContent = "Selecione uma opção";
});

select.addEventListener("change", () => {
  if (select.value !== "") {
    mensagem.textContent = `Você escolheu: ${select.value}`;
  } else {
    mensagem.textContent = "";
  }
});