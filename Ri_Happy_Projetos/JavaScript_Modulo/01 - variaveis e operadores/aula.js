const precoGaso = 5.79;
let kmPorLitro = 12;
let kmRodado = 1580;

valorGasto = (kmRodado / kmPorLitro)*precoGaso;

console.log(`O valor gasto na viagem foi de R$ ${valorGasto.toFixed(2)} reais`);