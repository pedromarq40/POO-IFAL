import GerenciadorDespesas from "./gerenciador.js"
import promptSync from "prompt-sync"

const promptLib = promptSync()

class Sistema{
    #gerenciador
    constructor(){
        this.#gerenciador = new GerenciadorDespesas()
    }

    logComEspaço(mensagem){
        console.log("")
        console.log(mensagem)
    }

    listarDespesasFixas(){
        const despesas = this.#gerenciador.despesasFixas
        this.logComEspaço('Despesas Fixas:')
        despesas.forEach((despesa, index) => {
            console.log(`${index + 1}. ${despesa.nome} - R$${despesa.valor} - Categoria: ${despesa.categoria}`)
        })
    }

    listarDespesasVariaveis(){
        const despesas = this.#gerenciador.despesasVariaveis
        this.logComEspaço('Despesas Variáveis:')
        despesas.forEach((despesa, index) => {
            console.log(`${index + 1}. ${despesa.nome} - R$${despesa.valor} - Data: ${despesa.data}`)
        })
    }

    listarDespesas(){
        this.listarDespesasFixas()
        this.listarDespesasVariaveis()
    }

    adicionarFixaViaSeed(nome, valor, categoria){
        this.#gerenciador.adicionarDespesaFixa(nome, valor, categoria)
    }

    adicionarVariavelViaSeed(nome, valor, data){
        this.#gerenciador.adicionarDespesaVariavel(nome, valor, data)
    }

    adicionarDespesa(){
        let tipo
        console.log("")
        while (true){
            try{
                this.logComEspaço("Escolha o tipo de despesa: \n1 - Despesa Fixa \n2 - Despesa Variável")
                tipo = promptLib("Escolha o tipo de despesa: ")
                if (tipo !== '1' && tipo !== '2') throw new Error("Escolha 1 ou 2!")
                tipo = Number(tipo)
                break
            }catch (error){
                this.logComEspaço(error.message)
            }
        }
        if (tipo === 1){
            while(true){
                this.logComEspaço("Insira os dados da despesa fixa:")
                const nome = promptLib("Nome: ")
                const valor = Number(promptLib("Valor: "))
                const categoria = promptLib("Categoria: ")
                try{
                    this.#gerenciador.adicionarDespesaFixa(nome, valor, categoria)
                }catch(error){
                    this.logComEspaço(error.message)
                }
                break
            }
        } else {
            while(true){
            this.logComEspaço("Insira os dados da despesa variável:")
            const nome = promptLib("Nome: ")
            const valor = Number(promptLib("Valor: "))
            const data = promptLib("Data (dd/mm/aaaa): ")
            try{
                    this.#gerenciador.adicionarDespesaVariavel(nome, valor, data)
                }catch(error){
                    this.logComEspaço(error.message)
                }
                break
            }
            
        }
    }

    removerDespesa(){
        while (true){
            try{
                this.logComEspaço("Escolha o tipo de despesa: \n1 - Despesa Fixa \n2 - Despesa Variável")
                let tipo = Number(promptLib("Escolha o tipo de despesa: "))
                let id = Number(promptLib("Digite o id da despesa que deseja remover: "))
                if (tipo === 1){
                    this.#gerenciador.removerDespesa(id - 1, 'fixa')
                } else if (tipo === 2){
                    this.#gerenciador.removerDespesa(id - 1, 'variavel')
                } else {
                    this.logComEspaço("Tipo de despesa inválido!")
                } 
                this.logComEspaço("Despesa removida com sucesso!")
                break
            }catch(error){
                this.logComEspaço(error.message)
            }
        }
    }

        
    menu(){
        let rodando = true
        this.logComEspaço("SEJA BEM VINDO AO GERENCIADOR DE DESPESAS!")
        while (rodando){
            this.logComEspaço("Veja as opções: \n1 - Listar Desepesas \n2 - Listar Despesas Fixas \n3 - Listar Despesas Variáveis \n4 - Adicionar Despesa \n5 - Remover Despesa \n0 - Sair")
            let opção = promptLib("Escolha uma opção: ")
            switch (opção){
                case '1':
                    this.listarDespesas()
                    break
                case '2':
                    this.listarDespesasFixas()
                    break
                case '3':
                    this.listarDespesasVariaveis()
                    break
                case '4':
                    this.adicionarDespesa()
                    break
                case '5':
                    this.removerDespesa()
                    break
                case '0':
                    rodando = false
                    this.logComEspaço("Saindo do sistema")
                    break
                default:
                    this.logComEspaço("Opção Inválida!")
            }
        
        }
    }
}
const sistema = new Sistema()

sistema.adicionarFixaViaSeed("Aluguel", 1000, "Moradia")
sistema.adicionarFixaViaSeed("Internet", 100, "Serviços")
sistema.adicionarVariavelViaSeed("Supermercado", 200, "01/06/2024")
sistema.adicionarVariavelViaSeed("Cinema", 50, "02/06/2024")

sistema.menu()