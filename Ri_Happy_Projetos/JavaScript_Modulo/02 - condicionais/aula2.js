/*
    Condição de pagamento:
    1 - A vista Débito, recebe 10% de desconto;
    2 - A vista no Dinheiro ou PIX, recebe 15% de desconto;
    3- Em duas vezes, preço normal de etiqueta sem juros;
    4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/
const preco = 100;
const formaPay = 5;
let valorPay = 0;

if(formaPay === 1){
    valorPay = preco - (preco * 0.10);
    console.log(`O valor da compra deu R$ ${valorPay}`)
}else if(formaPay === 2){
    valorPay = preco - (preco * 0.15);
    console.log(`O valor da compra deu R$ ${valorPay}`)
}else if(formaPay === 3){
    valorPay = preco;
    console.log(`O valor da compra deu R$ ${valorPay}`)
}else if(formaPay === 4){
    valorPay = preco + (preco * 0.10);
    console.log(`O valor da compra deu R$ ${valorPay}`)
}
else{
    console.log("Forma de pagamento Inválida")
}