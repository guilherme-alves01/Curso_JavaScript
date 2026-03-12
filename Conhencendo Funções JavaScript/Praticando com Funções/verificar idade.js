//Faça um programa que utilize uma função para que verifique se alguém é maior de idade

function verificarIdade(idade){
    if (idade >= 18){
        console.log("Tudo certo, você é maior de idade");
    }else{
        console.log("Que pena, você ainda não é maior de idade");
    }
}

verificarIdade(18);
verificarIdade(23);
verificarIdade(17);