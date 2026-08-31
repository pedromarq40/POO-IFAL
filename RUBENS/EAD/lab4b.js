class Produto{
    constructor(nome, preco){
        this.nome = nome
        this.preco = preco
    }

    descricao(){
        return `Produto: ${this.nome}, Preço: R$${this.preco}`
    }

    calcularPrecoComDesconto(desconto){
        return desconto.aplicarDesconto(this.preco)
    }

    calcularDescontoCombinados(d1, d2){
        return d1.aplicarDesconto(d2.aplicarDesconto(this.preco))
    }
}

class Desconto{
    aplicarDesconto(preco){
        return preco
    }
}

class DescontoFixo extends Desconto{
    constructor(valor){
        super()
        this.valor = valor
    }

    aplicarDesconto(preco){
        return preco - this.valor
    }
}

class DescontoPercentual extends Desconto{
    constructor(porcentagem){
        super()
        this.porcentagem = porcentagem
    }
    aplicarDesconto(preco){
        return preco - (preco * (this.porcentagem / 100))
    }
}

function testarDesconto(){
    let d = new Desconto()
    let p = new Produto("Notebook", 3000)
    let df = new DescontoFixo(300)
    let dp = new DescontoPercentual(10)

    console.assert(p.calcularPrecoComDesconto(d) === 2700, "Erro: Desconto aplicado incorretamente")
    console.assert(p.calcularPrecoComDesconto(df) === 2700, "Erro: Desconto fixo aplicado incorretamente")
    console.assert(p.calcularPrecoComDesconto(dp) === 2700, "Erro: Desconto calculado incorretamente")
    console.assert(p.calcularDescontoCombinados(df, dp) === 2400, "Erro: Desconto calculado incorretamente2")
}

testarDesconto()