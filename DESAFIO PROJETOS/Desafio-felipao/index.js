let Heroi = "Mario"
let XP = 0
let nivel = ""

switch (XP) {
    case (XP<1000):
        nivel = "Ferro"
        break

    case (XP>1001 && XP<2000):
        nivel = "Bronze"
        break

    case (XP>2001 && XP<5000):
        nivel = "Prata"
        break
}

console.log("O Herói de nome " + Heroi + " está no nível de " + nivel)