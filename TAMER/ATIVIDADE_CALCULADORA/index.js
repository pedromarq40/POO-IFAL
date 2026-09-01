class Calculadora {

    constructor() {
        if (new.target === Calculadora)
            throw Error("Classe Abstrata")
    }
    
    adicao(x, y) {
        return x + y;
    }

    subtracao(x, y) {
        return x - y;
    }

    igual(x, y) {
        return x === y;
    }

}

class ParOrdenado{

    constructor(x, y){
        if (new.target == ParOrdenado) throw Error("Par Ordenado não pode ser implementado")
        this.x = x
        this.y = y
    }

    adição(obj){
        this.x += obj.x
        this.y += obj.y
    }

    subtracao(obj){
        this.x -= obj.x
        this.y -= obj.y
    }

    igual(obj){
        return (obj.x == this.x && obj.y == this.y)
    }
}

class Ponto extends ParOrdenado{}
class NumeroComplexo extends ParOrdenado{}

class CalculadoraImpl extends Calculadora {

    verificar(obj1, obj2){
        return (obj1 instanceof NumeroComplexo && obj2 instanceof NumeroComplexo) || (obj1 instanceof Ponto && obj2 instanceof Ponto)
    }

    adicaoEsp(obj1, obj2){ if(this.verificar(obj1, obj2)) obj1.adição(obj2) }

    subtracaoEsp(obj1, obj2){ if(this.verificar(obj1, obj2)) obj1.subtracao(obj2) }

    igualEsp(obj1, obj2){ if(this.verificar(obj1, obj2)) obj1.igual(obj2)}
}

let ponto1 = new Ponto(1, 1);
let ponto2 = new Ponto(3, 3);
let ponto3 = new Ponto(2, 2);

let numero1 = new NumeroComplexo(5, 8);
let numero2 = new NumeroComplexo(1, 2);
let numero3 = new NumeroComplexo(4, 6);
let numero4 = new NumeroComplexo(5, 8);

let calculadora = new CalculadoraImpl();

if (calculadora.igual(1, 1)) {
    console.log("OK");
} else {
    console.log("ERRO");
}

if (calculadora.igualEsp(ponto1, ponto1)) {
    console.log("OK");
} else {
    console.log("ERRO");
}

if (calculadora.igualEsp(numero1, numero1)) {
    console.log("OK");
} else {
    console.log("ERRO");
}

if (calculadora.igual(calculadora.adicao(1, 4), 5)) {
    console.log("OK");
} else {
    console.log("ERRO");
}

if (calculadora.igualEsp(calculadora.adicaoEsp(ponto1, ponto3), ponto2)) {
    console.log("OK");
} else {
    console.log("ERRO");
}

if (calculadora.igualEsp(calculadora.adicaoEsp(numero2, numero3), numero4)) {
    console.log("OK");
} else {
    console.log("ERRO");
}

if (calculadora.igualEsp(calculadora.subtracaoEsp(2, 1), 1)) {
    console.log("OK");
} else {
    console.log("ERRO");
}

if (calculadora.igualEsp(calculadora.subtracaoEsp(ponto2, ponto3), ponto1)) {
    console.log("OK");
} else {
    console.log("ERRO");
}

if (calculadora.igualEsp(calculadora.subtracaoEsp(numero1, numero2), numero3)) {
    console.log("OK");
} else {
    console.log("ERRO");
}

/*
SAIDA ESPERADA 
OK
OK
OK
OK
OK
OK
OK
OK
OK
*/

