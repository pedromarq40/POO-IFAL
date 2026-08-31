class Despesa{
    #nome
    #valor
    #id
    constructor(nome, valor){
        if(!nome) throw new Error('Nome Inválido!')
        if(valor <= 0) throw new Error('Valor Inválido! Deve ser maior que zero.')
        this.#nome = nome
        this.#valor = valor
    }

    get nome(){
        return this.#nome
    }

    get valor(){
        return this.#valor
    }

    set nome(novoNome){
        if (!novaCategoria) throw new Error('Nome Inválido!')
        this.#nome = novoNome
    }

    set valor(novoValor){
        if (novoValor <= 0) throw new Error('Valor Inválido! Deve ser maior que zero.')
        this.#valor = novoValor
    }

    alterarDespesa(novoNome, novoValor){
        this.nome = novoNome
        this.valor = novoValor
    }
}

class DespesaFixa extends Despesa{
    #categoria
    constructor(nome, valor, categoria){
        super(nome, valor)
        if (!categoria) throw new Error('Categoria Inválida!')
        this.#categoria = categoria
    }

    get categoria(){
        return this.#categoria
    }
    
    set categoria(novaCategoria){
        if (!novaCategoria) throw new Error('Categoria Inválida!')
        this.#categoria = novaCategoria
    }

    alterarDespesaFixa(novoNome, novoValor, novaCategoria){
        this.alterarDespesa(novoNome, novoValor)
        this.categoria = novaCategoria
    }
}

class DespesaVariavel extends Despesa{
    #data
    constructor(nome, valor, data){
        super(nome, valor)
        if (!data) throw new Error('Data Inválida!')
        this.#data = data
    }

    get data(){
        return this.#data
    }
    
    set data(novaData){
        if (!novaData) throw new Error('Data Inválida!')
        this.#data = novaData
    }

    alterarDespesaVariavel(novoNome, novoValor, novaData){
        this.alterarDespesa(novoNome, novoValor)
        this.data = novaData
    }
}

export {DespesaFixa, DespesaVariavel}