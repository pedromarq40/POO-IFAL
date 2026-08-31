
function questão_1(){

    class Pessoa  {

        public nome : string
        public idade : number

        constructor(nome : string, idade : number) {
            this.nome  = nome
            this.idade = idade
        }

        public fazAniversario(): void {            
            this.idade++
        }

        public exibirDetalhes() : string{
            return `Nome : ${this.nome} Idade : ${this.idade}`
        }
    }

    const teste : Pessoa = new Pessoa('Pedro', 16)
    teste.fazAniversario()
    console.log(teste.exibirDetalhes())
}

function questão_2(){

    class Porta{

        constructor(
            public cor : string,
            public aberta : boolean,
            public eixoX : number,
            public eixoY : number,
            public eixoZ : number
        ){}

        public abre() : void {
            this.aberta = true
        }

        public fecha() : void{
            this.aberta = false
        }

        public pinta( cor : string) : void {
            this.cor = cor
        }

        public estaAberta() : boolean {
            return this.aberta
        }

        public exibirDetalhes() : string {
            return `Cor : ${this.cor}, Dimensões : (${this.eixoX}, ${this.eixoY}, ${this.eixoZ}), Aberta : ${this.aberta}`
        }
    }
}

function questão_3(){

    class Livro {
        
        constructor(
            public titulo : string,
            public autor : string,
            public anoPublicação : number,
            public genero : string,
            public paginaAtual : number
        ){}

        public avançarPágina() : void {
            this.paginaAtual++
        }

        public voltarPagina() : void {
            if (this.paginaAtual >= 1){
                this.paginaAtual -= 1
            }
        }

        public exbirDetalhes() : string{
            return `Título: ${this.titulo}, Autor: ${this.autor}, Ano de Publicação: ${this.anoPublicação}, Gênero: ${this.genero}, Página Atual: ${this.paginaAtual}`
        }
    }
}

function questão_4(){

    class Animal {

        constructor(
            public nome: string,
            public especie: string,
            public idade: number
        ) {}

        public emitirSom(som: string): void {
            console.log(`${this.nome} faz: ${som}`);
        }

        public envelhecer(): void {
            this.idade++;
        }

        public exibirDetalhes(): string {
            return `Nome: ${this.nome}, Espécie: ${this.especie} e Idade: ${this.idade}`;
        }
    }
}

function questão_5(){

    class PlayList{

        constructor(
            public nome : string,
            public autor : string,
            public musicas : string[]
        ){}

        public adicionarMusica( musica : string) : any {
            if (!this.musicas.includes(musica)){
                this.musicas.push(musica)
                return
            }
            return "Essa música já está na playlist!"
            
        }

        public removerMusica( musica : string ) : any {
            if (this.musicas.includes(musica)){
                const id : number = this.musicas.findIndex( i => i == musica)
                this.musicas.splice(id, 1)
            }
        }

        public quantidadeMusicas() : number {
            return this.musicas.length
        }
    }

}

function questão_6(){

    class EstoqueProdutos{

        constructor( public estoque : number, public preço : number, public nome : string) {}

        public aumentarQtd( qtd : number) : any {
            if (qtd > 0){
                this.estoque++
            }else{
                return 'Quantidade Inválida, deve ser maior que zero'
            }
        }

        public diminuirQtd ( qtd : number ) : any {
            if (qtd > 0 && qtd <= this.estoque){
                this.estoque++
            }else{
                return 'Quantidade Inválida, deve ser menor que o estoque e maior que zero'
            }
        }

        public atualizarPreço( preço : number ) : any {
            if ( preço > 0){
                this.preço = preço
            } else {
                return 'O preço deve ser maior que zero'
            }
        }

        public exibirInformações() : string {
            return `Nome : ${this.nome}, Estoque : ${this.estoque}, Preço : ${this.preço}`
        }
    }
}