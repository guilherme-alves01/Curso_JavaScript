function incrementarJuros(valor, percentualJuros){
    const valorDeAcrescimento = (percentualJuros/100) * valor;
    return valor + valorDeAcrescimento
}

console.log(incrementarJuros(70,15));