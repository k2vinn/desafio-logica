/*
    Condição de pagamento:
    1 - A vista Débito, recebe 10% de desconto;
    2 - A vista no Dinheiro ou PIX, recebe 15% de desconto;
    3- Em duas vezes, preço normal de etiqueta sem juros;
    4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

function aplicarDesconto(valor, desconto){
    if(desconto === 1){
        console.log(valor - (valor * 0.1))
    }else if(desconto === 2){
        console.log(valor - (valor * 0.15))
    }else if(desconto === 3){
        console.log(valor)
    }else if(desconto === 4){
        console.log(valor + (valor * 0.1))
    }

    return
}

aplicarDesconto(100,2)