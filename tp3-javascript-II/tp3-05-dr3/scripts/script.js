//let tituloHTML = document.querySelector("#title");
//tituloHTML.textContent = "Exercício 5: - Nomes Próprios";

/* 
Exercício 5 Nomes Próprios

Crie uma aplicação que contenha uma função que corrija as nome 
de um nome próprio informado, colocando as primeiras letras em maiúsculas corretamente. 
Por exemplo, se o usuário informar “machado de assis” a aplicação exibe “Machado de Assis” corretamente.

Observações:

Utilize prompt e alert.
Empregue uma lista simples de exceções como “de”, “do” ou “da”. Não é preciso esgotar todas as possibilidades.

*/

const autoresBrasileiros = [
    "machado de assis",
    "clarice lispector",
    "jorge amado",
    "guimarães rosa",
    "graciliano ramos",
    "carlos drummond de andrade",
    "manuel bandeira",
    "cecília meireles",
    "monteiro lobato",
    "lygia fagundes telles"
  ];

let autoresCorrigidos = [];

autoresBrasileiros.forEach((autor) => {
    let nome = autor.split(" ");
    for(let i = 0; i < nome.length; i++){
        nome.forEach((palavra) => {
s            if(palavra !== "do" || palavra !== "da" || palavra !== "de"){
                palavra[0].toLocaleUpperCase();
                console.log(palav)

            }
        })
    }
});


  