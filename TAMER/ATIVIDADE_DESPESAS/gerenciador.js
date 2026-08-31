import {DespesaFixa, DespesaVariavel} from './despesa.js'

class GerenciadorDespesas{
    #despesasFixas
    #despesasVariaveis
    constructor(){
        this.#despesasFixas = []
        this.#despesasVariaveis = []
    }

    get despesasFixas(){
        return this.#despesasFixas
    }

    get despesasVariaveis(){
        return this.#despesasVariaveis
    }

    adicionarDespesaFixa(nome, valor, categoria){
        const despesa = new DespesaFixa(nome, valor, categoria)
        this.#despesasFixas.push(despesa)
    }

    adicionarDespesaVariavel(nome, valor, data){
        const despesa = new DespesaVariavel(nome, valor, data)
        this.#despesasVariaveis.push(despesa)
    }

    removerDespesa(id, tipo){
        if (tipo === 'fixa'){
            this.#despesasFixas.splice(id, 1)
        } else if (tipo === 'variavel'){
            this.#despesasVariaveis.splice(id, 1)
        }
    }
    
    alterarDespesaFixa(id, novoNome, novoValor, novaCategoria){
        const despesa = this.#despesasFixas[id]
        despesa.alterarDespesaFixa(novoNome, novoValor, novaCategoria)
    }

    alterarDespesaVariavel(id, novoNome, novoValor, novaData){
        const despesa = this.#despesasVariaveis[id]
        despesa.alterarDespesaVariavel(novoNome, novoValor, novaData)
    }
}

export default GerenciadorDespesas
