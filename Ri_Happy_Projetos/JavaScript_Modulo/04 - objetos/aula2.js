class Car {
    marca;
    cor;
    gastoPorKM;

    constructor(marca, cor, gastoPorKM){
        this.marca = marca;
        this.cor = cor;
        this.gastoPorKM = gastoPorKM;
    }

    calcularGasto(distanciaEmKm, combustivel){
        return distanciaEmKm * this.gastoPorKM * combustivel;
    }
}

const Honda = new Car('Honda Fit', 'Preto', 1/12);

console.log(Honda.calcularGasto(70,5).toFixed(2));

const Palio = new Car('Fiat', 'Vermelho', 1/10);

console.log(Palio.calcularGasto(70,5).toFixed(2));