const precoCombustivel = 5.99;
const kmPorLitros = 34;
const distanciaEmKm = 20;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;
console.log(valorGasto.toFixed(2));