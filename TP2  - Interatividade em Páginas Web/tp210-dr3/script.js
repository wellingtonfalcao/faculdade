document.querySelector("#title").textContent = "Exercício 10: Quadrado com Efeitos CSS e Eventos de Clique";
/*

10 - Quadrado com Efeitos CSS e Eventos de Clique

Objetivo: 
Criar um quadrado com múltiplos eventos interativos.

Requisitos:
- Ao passar o mouse, aplique um efeito CSS (como girar, mover ou redimensionar).
- Ao clicar, mude a cor do quadrado e exiba um texto abaixo dele.


*/

// Mudar a escala do objeto ao passar mouse e restaurar ao tirar
let quadrado =  document.querySelector(".quadrado");
quadrado.addEventListener("mouseover", () => {
    quadrado.style.scale = "1.2";
});

quadrado.addEventListener("mouseout", () => {
    quadrado.style.scale = "1.0";
});

let flag = false;

window.addEventListener("click", () => {
    if(!flag){
        let texto = document.createElement("p");
        texto.textContent = "Aqui um texto depois de clicar no quadrado"
        texto.style.color = "white";
        quadrado.style.backgroundColor = "red";
        document.body.appendChild(texto);
        flag = true;
    }
    
});



