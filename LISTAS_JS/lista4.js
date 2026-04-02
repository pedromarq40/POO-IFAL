function questão1() {

    class Carrinho {

        constructor() {
            this.itens = [];
        }

        adicionarItem(item) {
            this.item.push(item)
        }
    }
}

function questão2(){

    class Carrinho {
    
        constructor() {
            this.itens = [];
        }

        removerItem(itemNome) {
            let index = this.itens.indexOf(itemNome)

            if (index !== -1) {
                this.itens.splice(index, 1)
            }
        }
    }
}

function questão3e4(){

    class Empresa {

        constructor(){
            this.salarios_funcionarios = []
            this.funcionarios = []
        }

        addFuncionario(nome, função){
            this.funcionarios.push({
                nome: nome,
                função: função
            })
        }

        getSalarioTotal() { 
            
            let total = 0
            for ( let salario of this.salarios_funcionarios) {
                total += salario
            }
            return total
        }

        getFuncionario(nome){
            return this.funcionarios.filter( item => item.nome == nome)
        }
    }

    let teste = new Empresa
    teste.addFuncionario('pedro', 'dono')
    teste.addFuncionario('zezo', 'gerente')
    console.log(teste.funcionarios)
    console.log(teste.getFuncionario('pedro'))
}

function questão_5(){
    
    class Biblioteca{

        constructor(){
            this.livros = []
        }

        addLivro(nome_livro){
            this.livros.push(nome_livro)
        }

        removerLivro(nome_livro){
            let index = this.livros.indexOf(nome_livro)
            this.livros.splice(index, 1)
        }

        listarLivros(){
            this.livros.forEach((item) => console.log(item))
        }
    }
}

function questão_6(){

    class Pessoa{

        constructor(nome, idade){
            this.nome = nome
            this.idade = idade
        }

        getDescrição(){
            return `Olá, sou ${this.nome} e tenho ${this.idade} anos de idade`
        }
    }
}

function questão_7(){

    class Funcionario{

        constructor(nome, salario){
            this.nome = nome
            this.salario = salario
        }

        addBonus(porcentagem){
            if (porcentagem >= 9  && porcentagem <= 1000){
                this.salario += (this.salario*porcentagem)/100
                console.log('Novo Salário:', this.salario)
            }else{
                console.log('Insira um bônus na faixa de 9% a 1000%')
            }
                
        }
    }


}
