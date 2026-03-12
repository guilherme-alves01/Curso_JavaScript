const precoEtanol = 5.79;
const precoGasolina = 5.99;
const kmPorLitros = 34;
const distanciaEmKm = 20;
const tipoCombustivel = 'Gasolina';

const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoCombustivel === 'Etanol') {
  const valorGasto = litrosConsumidos * precoEtanol;
  console.log(valorGasto.toFixed(2));
} else  {
  const valorGasto = litrosConsumidos * precoGasolina;
  console.log(valorGasto.toFixed(2));
}