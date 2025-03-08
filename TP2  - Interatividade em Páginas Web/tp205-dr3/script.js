document.querySelector("#title").textContent = "Exercício 5: Transformação com Mouse Over";
/*

5 - Transformação com Mouse Over

Objetivo: Criar um efeito visual ao passar o mouse sobre um quadrado.
Requisitos:

Crie um quadrado azul usando HTML e CSS.
Ao passar o mouse sobre o quadrado (evento onMouseOver):
O quadrado deve se tornar transparente usando rgba.
Uma imagem oculta atrás do quadrado deve aparecer (use z-index).
Quando o mouse sair do quadrado, ele deve retornar ao estado original.

*/

// Obter os elementos do HTML
let quadrado = document.querySelector("#quadrado");
let quadradoImagem = document.querySelector("#quadrado-imagem");

quadrado.addEventListener("mouseover",()=>{
    quadrado.style.backgroundColor = "rgba(0,0,255,0)";
    quadradoImagem.style.zIndex = "3"
});

quadrado.addEventListener("mouseout",()=>{
    quadrado.style.backgroundColor = "rgba(0,0,255,1)";
    quadradoImagem.style.zIndex = "1"
});