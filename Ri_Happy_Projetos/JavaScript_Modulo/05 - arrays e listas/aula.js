//String variavel
const aluno = 'joao'; 

//Objeto criado sem uma classe, objeto literal
const aluna = {nome: 'Maria', idade: 25}; 

//ARRAYS - listas representadas por colchetes '[]'
const alunos = ['João', 'Vitor', 'Marina'];
console.log(alunos);

alunos.push('Renan'); // Adicionou um aluno na ultima posição
alunos.push(25);

alunos[2] = 'Vinicius'; // Adiciona ou substitiu o valor no local [2]

console.log(alunos);

console.log(alunos.pop()); //pop arranca o ultimo item da lista
console.log(alunos);