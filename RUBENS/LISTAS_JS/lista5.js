class Livro{
    #disponibilidade
    #autor
    #anoPublicacao
    #titulo
    static #totalLivros = 0 
    constructor({titulo, autor, anoPublicacao = 2010}){
        this.#disponibilidade = true
        this.#titulo = titulo
        this.#autor = autor
        this.#anoPublicacao = anoPublicacao
        Livro.#totalLivros += 1
    }

    get disponibilidade(){
        return this.#disponibilidade
    }

    get titulo(){
        return this.#titulo
    }
    set titulo(novoTitulo){
        if (novoTitulo != '') this.#titulo = novoTitulo
    }

    get autor(){
        return this.#autor
    }

    get anoPublicacao(){
        return `Livro Publicado em ${this.#anoPublicacao}`
    }

    emprestar(){
        if (this.#disponibilidade) this.#disponibilidade = false
    }

    devolver(){
        if (!this.#disponibilidade) this.#disponibilidade = true
    }
}

class Biblioteca {
    #livros
    constructor(){
        this.#livros = []
    }

    adicionarLivro(livroNovo){
        try{
            const livro = this.#livros.find((livro) => livro.titulo == livroNovo.titulo)
            if (livro) {
                throw new Error('Livro já está cadastrado!')
            }
            this.#livros.push(livroNovo)
        } catch(error){
            console.warn(`Aviso: ${error.message}`)
        }
    }

    listarLivros(){
        this.#livros.forEach( (livro) => {
            console.log(`${livro.titulo} está ${livro.disponibilidade ? 'Disponível' : 'Indisponível'}`)
        })
    }

    emprestarLivro(titulo){
        try{
            const livro = this.#livros.find((livro) => livro.titulo == titulo)
            if (!livro) throw ReferenceError('Esse livro não está cadastrado!')
            if (!livro.disponibilidade) throw new Error('Esse livro está indisponível!')
            livro.emprestar()  
        }catch(error){
            if (error instanceof ReferenceError) console.warn(`Erro: ${error.message}`)
            if (error.message == 'Esse livro está indisponível!') console.warn(`Erro : ${error.message}`)   
        }
              
    }

    devolverLivro(titulo){
        try{
            const livro = this.#livros.find((livro) => livro.titulo == titulo)
            if (!livro) throw ReferenceError('Esse livro não está cadastrado!')
            if (livro.disponibilidade) throw new Error('Esse livro não está em empréstimo!')
            livro.devolver()  
        }catch(error){
            if (error instanceof ReferenceError) console.warn(`Erro: ${error.message}`)
            if (error.message == 'Esse livro está indisponível!') console.warn(`Erro : ${error.message}`)   
        }
    }
}

function testeBiblioteca(){

    const livro1 = new Livro({titulo: "Dom Quixote", autor: "Miguel de Cervantes", anoPublicacao: 1605})
    const livro2 = new Livro({titulo: "1984", autor: "George Orwell", anoPublicacao: 1949})
    const livro3 = new Livro({titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien"})

    const biblioteca = new Biblioteca()

    biblioteca.adicionarLivro(livro1)
    biblioteca.adicionarLivro(livro2)
    biblioteca.adicionarLivro(livro3)

    biblioteca.listarLivros()

    biblioteca.emprestarLivro('Dom Quixote')

    console.log('\n')
    biblioteca.listarLivros()

    console.log('\n')
    biblioteca.emprestarLivro('Dom Quixote')
    biblioteca.devolverLivro('Dom Quixote')

    console.log('\n')
    biblioteca.listarLivros()
}

testeBiblioteca()