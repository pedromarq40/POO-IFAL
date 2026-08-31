function questao_1() {
  class Pessoa {
    nome;
    idade;
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
    fazAniversario() {
      this.idade++;
    }
    exibirDetalhes() {
      return `Nome : ${this.nome} Idade : ${this.idade}`;
    }
  }
  const teste = new Pessoa("Pedro", 16);
  teste.fazAniversario();
  console.log(teste.exibirDetalhes());
}
function questao_2() {
  class Porta {
    cor;
    aberta;
    eixoX;
    eixoY;
    eixoZ;
    constructor(cor, aberta, eixoX, eixoY, eixoZ) {
      this.cor = cor;
      this.aberta = aberta;
      this.eixoX = eixoX;
      this.eixoY = eixoY;
      this.eixoZ = eixoZ;
    }
    abre() {
      this.aberta = true;
    }
    fecha() {
      this.aberta = false;
    }
    pinta(cor) {
      this.cor = cor;
    }
    estaAberta() {
      return this.aberta;
    }
    exibirDetalhes() {
      return `Cor : ${this.cor}, Dimensões : (${this.eixoX}, ${this.eixoY}, ${this.eixoZ}), Aberta : ${this.aberta}`;
    }
  }
}
function questao_3() {
  class Livro {
    titulo;
    autor;
    anoPublicação;
    genero;
    paginaAtual;
    constructor(titulo, autor, anoPublicação, genero, paginaAtual) {
      this.titulo = titulo;
      this.autor = autor;
      this.anoPublicação = anoPublicação;
      this.genero = genero;
      this.paginaAtual = paginaAtual;
    }
    avançarPágina() {
      this.paginaAtual++;
    }
    voltarPagina() {
      if (this.paginaAtual >= 1) {
        this.paginaAtual -= 1;
      }
    }
    exbirDetalhes() {
      return `Título: ${this.titulo}, Autor: ${this.autor}, Ano de Publicação: ${this.anoPublicação}, Gênero: ${this.genero}, Página Atual: ${this.paginaAtual}`;
    }
  }
}
function questao_4() {
  class Animal {
    nome;
    especie;
    idade;
    constructor(nome, especie, idade) {
      this.nome = nome;
      this.especie = especie;
      this.idade = idade;
    }
    emitirSom(som) {
      console.log(`${this.nome} faz: ${som}`);
    }
    envelhecer() {
      this.idade++;
    }
    exibirDetalhes() {
      return `Nome: ${this.nome}, Espécie: ${this.especie} e Idade: ${this.idade}`;
    }
  }
}
function questao_5() {
  class PlayList {
    nome;
    autor;
    musicas;
    constructor(nome, autor, musicas) {
      this.nome = nome;
      this.autor = autor;
      this.musicas = musicas;
    }
    adicionarMusica(musica) {
      if (!this.musicas.includes(musica)) {
        this.musicas.push(musica);
        return;
      }
      return "Essa música já está na playlist!";
    }
    removerMusica(musica) {
      if (this.musicas.includes(musica)) {
        const id = this.musicas.findIndex((i) => i == musica);
        this.musicas.splice(id, 1);
      }
    }
    quantidadeMusicas() {
      return this.musicas.length;
    }
  }
}
function questao_6() {
  class EstoqueProdutos {
    estoque;
    preço;
    nome;
    constructor(estoque, preço, nome) {
      this.estoque = estoque;
      this.preço = preço;
      this.nome = nome;
    }
    aumentarQtd(qtd) {
      if (qtd > 0) {
        this.estoque++;
      } else {
        return "Quantidade Inválida, deve ser maior que zero";
      }
    }
    diminuirQtd(qtd) {
      if (qtd > 0 && qtd <= this.estoque) {
        this.estoque++;
      } else {
        return "Quantidade Inválida, deve ser menor que o estoque e maior que zero";
      }
    }
    atualizarPreço(preço) {
      if (preço > 0) {
        this.preço = preço;
      } else {
        return "O preço deve ser maior que zero";
      }
    }
    exibirInformações() {
      return `Nome : ${this.nome}, Estoque : ${this.estoque}, Preço : ${this.preço}`;
    }
  }
}
