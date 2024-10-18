let win = 50
let lose = 5
let score = cont(win,lose)
let nivel = "";

function cont(win,lose){
    let score = win - lose
    return score
}

if (score<=10) {
    nivel = "Ferro";
} else if (score > 11 && score <= 20) {
    nivel = "Bronze";
} else if (score > 21 && score <= 50) {
    nivel = "Prata";
} else if (score > 51 && score <= 80) {
    nivel = "Ouro";
} else if (score > 81 && score <= 90) {
    nivel = "Diamante";
} else if (score > 91 && score <= 100) {
    nivel = "Lendário";
} else {
    nivel = "Imortal";
}

console.log("O Herói tem o saldo de " + score + " vitórias e está no nível de " + nivel)

