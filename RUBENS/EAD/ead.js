
class Computador{

    static id = 1
    #disponibilidade = false

    constructor({ marca = 'Lenovo', modelo, precoPorHora = 10}){
        this.id = Computador.id
        this.marca = marca 
        this.modelo = modelo
        this.precoPorHora = precoPorHora
        this.#disponibilidade = true

        Computador.id++
    }

    get disponibilidade(){
        return this.#disponibilidade
    }

    alugar(tempo){
        if (!this.#disponibilidade) return 'Computador Alugado!'
        this.#disponibilidade = false
        return tempo * this.precoPorHora
    }

    liberar(){
        this.#disponibilidade = true
        return 'O Computador foi liberado!'
    }
}

class LanHouse{

    static totalReceita = 0

    constructor(){
        this.computadores = []
    }

    addComputador(computador){
        if (this.computadores.find(pc => pc.id == computador.id)) return 'Este computador já foi adicionado!'
        this.computadores.push(computador)
        return 'Computador adicionado'
    }

    static atualizarReceita(preco){
        LanHouse.totalReceita += preco
    }

    listarComputadores(){
        this.computadores.forEach(computador => {
            console.log(`Id: ${computador.id}, Computador ${computador.modelo} ${computador.disponibilidade ? 'Disponível' : 'Indisponível'} com preço por hora de ${computador.precoPorHora}`)   
        })
    }

    alugarComputador(id, tempoHoras){
        
        const computador = this.computadores.find( pc => pc.id == id )

        if (tempoHoras <= 0) return 'Insira um tempo válido!'
        if (!computador.disponibilidade) return 'Computador Indisponível!'

        const receita = computador.alugar(tempoHoras)
        LanHouse.atualizarReceita(receita)
        return 'O computador foi alugado!'
    }

    liberarComputador(id){
        const computador = this.computadores.find( pc => pc.id == id )
        return computador.liberar()
    }

    resumo(){
        console.log(`Há ${this.computadores.length} computadores cadastrados,`)
        console.log(`Há ${this.computadores.filter(pc => pc.disponibilidade).length} computadores disponíveis`)
        console.log(`Receita Total: ${LanHouse.totalReceita}`)
    }
}

const lanHouse = new LanHouse()
const pc1 = new Computador({marca : "Dell", modelo : "ModeloFicticio"})
const pc2 = new Computador({modelo : "Loq 5", precoPorHora : 25})
const pc3 = new Computador({modelo: 'Teste'})

console.log(lanHouse.addComputador(pc1))
console.log(lanHouse.addComputador(pc2))
console.log(lanHouse.addComputador(pc3))
console.log('\n')

lanHouse.listarComputadores()
console.log('\n')


console.log(lanHouse.alugarComputador(1, 5))
console.log(lanHouse.alugarComputador(2, 3))
console.log('\n')


lanHouse.listarComputadores()
console.log('\n')


console.log(lanHouse.liberarComputador(1))
console.log('\n')

lanHouse.listarComputadores()
console.log(LanHouse.totalReceita)
console.log('\n')

console.log(lanHouse.alugarComputador(2, 10))
console.log('\n')

lanHouse.resumo()