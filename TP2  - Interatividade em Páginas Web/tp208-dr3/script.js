document.querySelector("#title").textContent = "Exercício 8: Redirecionamento com Alerta (onload)";
/*

8 - Redirecionamento com Alerta (onload)

Objetivo: 
Solicitar uma URL ao usuário e redirecionar a navegação.

Requisitos:
- Crie uma tag "a" sem link de navegação e com conteúdo "Link".
- Ao carregar a página, exiba um prompt pedindo uma URL.
- Atribua estar URL fornecida pelo usuário ao link.

*/

// Cria o <p> e o seu conteúdo "LinK"
let paragrafo = document.createElement("p");
paragrafo.textContent = "Link";

// Criar o <a> e coloca o <p> como seu nó filho
let alink = document.createElement("a");
alink.target = "_blank";
alink.appendChild(paragrafo);

//carrega a função onload e atribui um href ao link
window.addEventListener("load", () => {
    alink.href = "https://" + prompt("Digite uma URL sem www e https");
    document.body.appendChild(alink);
})






