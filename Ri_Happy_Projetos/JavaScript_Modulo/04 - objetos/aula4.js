class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome,peso,altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(){
        return this.peso / (this.altura * this.altura);
    }

    classificarImc(){
        const imc = this.calcularImc();
        if(imc < 18.5){
            return('Abaixo do peso');
        }else if (imc >= 18.5 && imc < 25){
            return('Peso Normal');
        }else if (imc >=25 && imc <30){
            return('Acima do peso');
        }else if (imc >=30 && imc <40){
            return('Obeso');
        }else {
            return('Obesidade Grave')
        }
    }
}

const Jose = new Pessoa ('José', 70, 1.75);
console.log(Jose.classificarImc());

const Vitor = new Pessoa ('Vitor', 63, 1.75);
console.log(Vitor.classificarImc());

const Kevin = new Pessoa ('Kevin', 59, 1.80);
console.log(Kevin.classificarImc());

//segurar alt na frente de uma palavra faz selecionar todas linhas