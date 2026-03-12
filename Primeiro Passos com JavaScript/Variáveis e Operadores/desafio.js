/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
 1 - Preço do combustível;
 2 - Gasto médio de combustível do carro por KM;
 3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem. */

const combustivel = 5.99;
const consumo = 34;
let distancia = 20;

litros = distancia/consumo;

gasto = litros*combustivel;

console.log("Será nevessário ",litros.toFixed(2)," litros de gasolina, logo a viagem custará ",gasto.toFixed(2), "R$");

