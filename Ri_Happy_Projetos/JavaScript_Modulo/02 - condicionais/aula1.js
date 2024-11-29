let nota1 = 'lea';
let nota2 = 6;
let nota3 = 8;
let media = (nota1 + nota2 + nota3)/ 3;

if(media > 7){
    console.log("Passou de Semestre!!");
}else if(media >= 5 && media<= 7){
    console.log("Recuperação")
}else if(media < 5){
    console.log("Reprovado");
}else{
    console.log("Revise as notas")
}