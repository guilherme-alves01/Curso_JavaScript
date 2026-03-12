/*Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
Código Condição de pagamento:
À vista Débito, recebe 10% de desconto;
À vista no Dinheiro ou PIX, recebe 15% de desconto;
Em duas vezes, preço normal de etiqueta sem juros;
Acima de duas vezes, preço normal de etiqueta mais juros de 10%;*/



pagamento = "2 Parcelas";
valorProduto = 157;

const desDebito = (valorProduto*10)/100;
const desPix = (valorProduto*15)/100;
const doisParc = (valorProduto/2);
const parcelas = 3
const pagParcelas = ((valorProduto/parcelas)*10)/100;


if(pagamento == "Débito"){
    console.log("Compra efetuada no débito, logo terá um desconto de",desDebito,"Reais, total a pagar:",(valorProduto-desDebito),"Reais");
}else if(pagamento == "Pix"|| pagamento == "Dinheiro" ){
    console.log("Compra efetuada no Pix ou Dinheiro, logo terá um desconto de",desPix,"Reais, total a pagar:",(valorProduto-desPix),"Reais");
}else if(pagamento == "2 Parcelas"){
    console.log("Compra efetuada em 2 Parcelas, logo será",valorProduto,"divido em duas vezes vezes sem juros de:",doisParc,"Reais");
}else if(pagamento == "Parcelado"){
    console.log("Compra em",parcelas,"vezes, logo terá um aumento 10% do valor do produto, totalizando",valorProduto+pagParcelas,"que será pago em:",pagParcelas,"vezes de:",pagParcelas,"reais");
}