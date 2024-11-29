function meuNome(nome){
    return `Meu nome é ${nome}`;
}
meuNome('Kevin')

function verifyAge(age, nome){
    if(age >= 18){
        console.log(`${meuNome(nome)}, sou Maior de Idade`);
    }else {
        console.log(`${meuNome(nome)}, sou Menor de Idade`);
    }
}

verifyAge(17, 'Kevin')