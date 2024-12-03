
const vitor = {
    nome: 'Vitor J Guerra',
    idade: 25,
} //OBJETO

vitor.altura = 1.69; //ADICIONANDO INFORMAÇÔES AO OBJETO


console.log(vitor.nome);

delete vitor.nome; //DELETANDO INFORMAÇÔES DO OBJETO
console.log(vitor.idade);
console.log(vitor);

const pessoa = {
    nome: 'Vitor J Guerra',
    idade: 25,
    descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    } //Uma função dentro de um objeto é chamado de método
}

pessoa.descrever();

const atributo = 'idade';

console.log(pessoa[atributo])