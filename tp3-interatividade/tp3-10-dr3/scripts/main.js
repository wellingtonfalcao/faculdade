let tituloHTML = document.querySelector("#title");
tituloHTML.textContent = "Exercício 10: - Formulário de Quiz com Soma de Pontuação";

//import { gerarNumeros } from "./func-random.js";
//import { sortNumberAsc } from "./func-ordenacao.js";
//import { numeroIntervalo } from "./func-validacao.js";
//import { numeroIntervalo } from "./func-produtos.js";

/* 

10 Formulário de Quiz com Soma de Pontuação

Crie no arquivo html um formulário, contendo três questões de múltipla escolha usando radio button,
cada pergunta/questão deverá ter 4 respostas para o usuário escolher sua opção. 
Crie também um botão que ao ser apertado, verifique os campos marcados e a cada resposta correta, 
some 1 à pontuação total. Exiba a pontuação em um alerta.

*/

const btCorrigir = document.querySelector("#corrigir");
btCorrigir.addEventListener("click",executarQuiz);

function executarQuiz(){
    let pontuacao = 0;

    let questao1 = pontuar("#questao-1", "a");
    let questao2 = pontuar("#questao-2", "b");
    let questao3 = pontuar("#questao-3", "a");

    console.log(pontuacao)
    function pontuar(questao, correto){
    let qst = document.querySelector(questao);
    let esc = qst.querySelector('input[type="radio"]:checked');
    if(esc && esc.value === correto){
        pontuacao++
    }
}
    alert(`Você fez ${pontuacao} pontos do total de 3 questões`);
}




