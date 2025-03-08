document.querySelector("#title").textContent = "Exercício 4: Contador Numérico";
/*

4 - Contador Numérico

Objetivo: Criar um contador que incremente um número cada vez que um botão for clicado.

Requisitos:
Ao clicar no botão, o número exibido deve aumentar em 1 unidade.

*/

// Script para incrementar o h3 partindo de 00
document.querySelector("#bt").addEventListener("click",()=>{
    let h3 = document.querySelector("h3");
    let contagem = Number(h3.textContent);
    contagem++ //Incrementar o valor obtido do h3
    h3.textContent = contagem; //Devolver o novo valor incrementado
});