class Veiculo{
    constructor(marca, ano){
        this.ano = ano
        this.marca = marca
    }

    descricao(){
        return `Marca: ${this.marca}, Ano: ${this.ano}`
    }
}

class Carro extends Veiculo{
    constructor(marca, ano, modelo, portas){
        super(marca, ano)
        this.modelo = modelo
        this.portas = portas
    }

    descricao(){
        return super.descricao() + `, Modelo: ${this.modelo}, Portas: ${this.portas}`
    }
}

let c1 = new Carro("Fiat", 2020, "Argo", 4)
let c2 = new Carro("Volkswagen", 2019, "Gol", 4)

console.log(c1.descricao())
console.log(c2.descricao())