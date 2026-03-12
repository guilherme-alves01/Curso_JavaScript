/*Faça um programa para invoncar uma função dentro de outra como exemplo juntar as 
duas funções anteriores para imprimir o nome da pessoa e se ela é maior de idade*/

function escrevaMeuNome(nome){
    return("Meu nome é "+nome);
}

function verificarIdade(idade){
    if (idade >= 18){
        console.log(escrevaMeuNome("Hellen, ")+"Tudo certo, você é maior de idade");
    }else{
        console.log("Que pena, você ainda não é maior de idade");
    }
}

verificarIdade(18);
