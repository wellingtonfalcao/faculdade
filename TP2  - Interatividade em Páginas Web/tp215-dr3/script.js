document.querySelector("#title").textContent = "Exercício 15: Condições";
/*

15 Grupo - Condições

Objetivo:
Adicionar estilos condicionais às linhas de uma tabela com base no valor de uma classe.

Requisitos:
Recrie a tabela abaixo no HTML:

No script.js:
Adicione um evento de clique ao botão dentro da tag <td>.
Ao clicar no botão, uma função deve verificar:
Se o valor da coluna "nota" da linha do botão clicado 
for maior ou igual a 5, adicione uma classe que deixe a cor de fundo da <tr>verde.
Se o valor da coluna "nota" da linha do botão clicado 
for menor que 5, adicione uma classe que deixe a cor de fundo da <tr>vermelha.

Obs: Não altere o arquivo index.html manualmente. Utilize apenas o DOM para manipulação.

*/

//Selecionar as tr dentro de tbody declarado no HTML
let linhas = document.querySelectorAll("tbody tr");
linhas.forEach(aluno => {
    //Seleciona o botão correpondente ao aluno atual
    const botao = aluno.querySelector("button");
    //Adiciona a ação de click e chama a condicional da nota
    botao.addEventListener("click", () => {
      //Seleciona a coluna referente a nota, no caso segunda coluna ([1])
      const dado = aluno.querySelector("td:nth-child(2)");
      console.log(dado);
      if(Number(dado.textContent) >= 5){
        aluno.classList.add("verde");
      }else {
        aluno.classList.add("vermelho");
      }
    })
});
