let tituloHTML = document.querySelector("#title");
tituloHTML.textContent = "Questao 3: Encontrar anos bissextos em um array";

import { transformarCaixaBaixa, removerRepetidos } from "./funcoes.js";

/*

3 Encontrar anos bissextos em um array

Enunciado: Crie uma página com um programa JavaScript para encontrar os anos bissextos em um determinado intervalo de anos. 

Observações:

Crie um array com pelo menos 5 elementos representando anos.
Use “document.write” para mostrar as mensagens no próprio HTML de saída: mostre o array original e a sua resposta.
Crie a função de verificação de ano bissexto em uma biblioteca apropriada.
Teste o seu programa com cenários diferentes.
Considerações:

O array original poderá ser alterado para testar outros cenários de execução.
Pelo menos 1 ano do array deve ser bissexto.

*/

window.addEventListener("load", () => {
  
  const frutas = [
    "Maçã",
    "Jaca",
    "Banana",
    "Banana",
    "Laranja",
    "MORANGO",
    "Abacaxi",
    "Uva",
    "JACA",
    "JaCA",
    "morango",
    "Manga",
    "Morango",
    "PESSEGO",
    "PEssEGO",
    "Kiwi"
  ];

  let frutasCaixaBaixa = removerRepetidos(transformarCaixaBaixa(frutas))

  document.write(`<h3>O array original frutas: ${frutas.join(", ")}</h3>
    <h3>O array tratado removendo duplicadas ignorando caseSensitive: ${frutasCaixaBaixa.join(", ")}</h3>`);
});

//Entrada do valor 
let anoBissexto = parseInt(prompt("Informe um ano e lhe respondo se é bissexto"));

//Validação se o valor é de um ano 
if (!anoBissexto) {
    alert("Digite um ano válido");
} else if (anoBissexto < 0){
    alert("Não digite um ano menor que 0");
} else {
    // Verifica se o ano é multiplo de 4 e 400 e exclui os múltiplos de 100. 
    if ((anoBissexto % 4 === 0  && anoBissexto % 100 !== 0) || (anoBissexto % 400 === 0)) {
        alert(`${anoBissexto} é bissexto`);
    } else {
        alert(`${anoBissexto} não é bissexto`);
    }
}