const n = 10;
const nDivisivelPor5 = (n % 5) === 0;

if (nDivisivelPor5) {
    console.log('Sim');
} else {
    console.log('Não');
}

//If , Else, Else If - São estruturas condicionais simples

const etanol = 5.79;
const gasolina = 5;
let tipoCombustivel ='etanol';
let kmPorLitro = 10;
let distanciaKm = 100;
let valorGasto = 0;

if (tipoCombustivel === 'etanol'){
    valorGasto = (distanciaKm / kmPorLitro) * etanol;
    console.log(`O valor gasto na viagem foi de R$ ${valorGasto.toFixed(2)} reais.`);
}else if(tipoCombustivel === 'gasolina'){
    valorGasto = (distanciaKm / kmPorLitro) * gasolina;
    console.log(`O valor gasto na viagem foi de R$ ${valorGasto.toFixed(2)} reais.`);
}else{
    console.log("O tipo de combustivel informado é invalido!!")
}