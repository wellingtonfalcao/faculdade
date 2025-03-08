document.querySelector("#title").textContent = "Exercício 3: Modificação de Estilo com Clique";
/*

3 - Modificação de Estilo com Clique

Objetivo: Implementar a mudança de cor, tamanho e espessura da borda de um quadrado ao clicar em um botão.

Requisitos:

Defina o quadrado com as seguintes regras de CSS:
width: 100px;
height: 100px;
background-color: #F00;
margin: 20px auto;
cursor: pointer;
border: solid 3px #999;

Ao clicar no botão, o estilo do quadrado deve ser alterado (por exemplo, uma nova cor de fundo e borda).

*/

// Script para alterar conteúdo do <p>
document.querySelector("#bt").addEventListener("click",()=>{
    let quadrado = document.querySelector(".quadrado");
    quadrado.style.backgroundColor = "green";
    quadrado.style.borderColor = "red";
})