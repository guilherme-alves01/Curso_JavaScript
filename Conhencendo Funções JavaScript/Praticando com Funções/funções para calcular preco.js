/*Agora tendo em vista tudo o que foi feito com funções, será necesário criar um 
código para calcular os juros de pagamento tendo multiplas maneiras de pagamento*/

function aplicarDesconto(valor, desconto){
    return (valor - (valor *( desconto/100)));
}

function aplicarJuros(valor, juros){
    return(valor +(valor *(juros/100)));
}

let pagamento = "Parcelado";
let valorProduto = 150;
let parcelas = 3;

let valorPar = (valorProduto/parcelas);

if(pagamento == "Débito"){
    console.log("Compra efetuada no débito, total a ser pago:",aplicarDesconto(valorProduto,10),"Reais");
}else if(pagamento == "Pix" || pagamento == "Dinheiro" ){
    console.log("Compra efetuada no Pix ou Dinheiro, logo você terá um de desconto de 15%, totalizando:",(aplicarDesconto(valorProduto,15)),"Reais");
}else if(pagamento == "2 Parcelas"){
    console.log("Compra efetuada em 2 Parcelas, logo será",valorProduto,"divido em duas vezes vezes sem juros de:",aplicarDesconto(valorProduto,50),"Reais");
}else if(pagamento == "Parcelado"){
    console.log("Compra efetuada em",parcelas,"parcelas, logo terá um acrescimo de 10% no valor do produto, totalizando:",aplicarJuros(valorProduto,10),"Reais, e com parcelas de:",valorPar,"Reais");
}

