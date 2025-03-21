let tituloHTML = document.querySelector("#title");
tituloHTML.textContent = "Exercício 13: - Fatorial";

//import { gerarNumeros } from "./func-random.js";
//import { sortNumberAsc } from "./func-ordenacao.js";
//import { numeroIntervalo } from "./func-validacao.js";
//import { numeroIntervalo } from "./func-produtos.js";
import { fatorial } from "./func-formulas.js";

/* 

Exercício 13 Grupo - Fatorial

No arquivo script.js, siga as etapas abaixo:

Solicite um número ao usuário.
Crie uma função para calcular o fatorial de um número, sendo este número informado pelo usuário através do prompt.
Chame esta função passando o número informado pelo usuário.

*/
function numeroInteiro(num){
    let flag = true
    if(num === null){
        flag = false;
    } else if(isNaN(num.trim()) || num.trim() === ""){
        flag = false;
    }
    return flag
}

numeroInteiro("3")


  

//let numUsuario = prompt("Digite um número para calcular seu fatorial");


// console.log(fatorial());