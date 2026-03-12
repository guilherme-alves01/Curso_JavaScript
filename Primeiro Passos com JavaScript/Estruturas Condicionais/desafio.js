/*Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço do gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.*/

const precoEtanol = 3.10;
const consumoEtanol = 7;

const precoGasolina = 5.99;
const consumoGasolina = 34;

let distancia = 20;

const mediaEtanol = (distancia/consumoEtanol);
const valorEtanol = (mediaEtanol*precoEtanol);

const mediaGasolina = (distancia/consumoGasolina);
const valorGasolina = (mediaGasolina*precoGasolina);

tipoCombustivel = "Gasolina"

if(tipoCombustivel == "Etanol"){
    console.log("Você precisará de",mediaEtanol.toFixed(2),"litros, logo será necessário",valorEtanol.toFixed(2),"R$");
}else if(tipoCombustivel == "Gasolina") {
    console.log("Você precisará de",mediaGasolina.toFixed(2),"litros, logo será necessário",valorGasolina.toFixed(2),"R$");
}

