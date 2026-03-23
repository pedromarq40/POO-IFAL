function questão_1(){
       
    interface aluno{
        nome: string;
        curso: string;
        ativo: boolean;
    }

    let teste : aluno = {
        nome : 'josé',
        curso : 'info',
        ativo : true
    }

    teste.ativo = false
    console.log(teste)

}

function questão_2(){

    interface turma{
        alunos : string[]
    }

    let sala : turma = {
        alunos : []
    }

    sala.alunos.splice(0, 0, 'pedro', 'josé', 'carlos')
    console.log(sala)
    console.log(sala.alunos.length)

}

function questão_3(){

    interface registro{
        presente: boolean;
        'horário entrada' : string;
    }

    let registro : registro = {
        presente: true,
        "horário entrada": "07:30"
    }

    console.log(registro.presente, registro["horário entrada"])

}

function questão_4(){

    let pessoa = {
        nome : 'pedro',
        idade : 16,
        apresentar : function() {console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos`)}
    }

    pessoa.apresentar()


}

function questão_5(){

    interface produto{
        [chave : string] : any;
    }

    let produto : produto = {
        nome : 'iphone77',
        preco : 123456789
    }

    produto.emEstoque = true
    delete produto.preco
    console.log('preco' in produto? 'Ainda há atributo preco':'Não há mais atributo preço')

    console.log(produto)

}

function questão_6(){

    function adicionarPropriedade(objeto : any, chave : string, valor: any){
        objeto[chave] = valor
        return objeto
    }

    let novo_obj = {}
    console.log(adicionarPropriedade(novo_obj, 'nome', 'pedro'))

}

function questão_7(){

    interface registro{
        atividades: string[],
        presente: boolean
    }

    let registroDiario : registro = {
        atividades : [],
        presente : true
    }

    registroDiario.atividades.splice(0,0,'comer','dormir','estudar')
    registroDiario.presente = false
    console.log(registroDiario)

}

function questão_8(){

    interface registro{
        atividades : string[],
        presente : boolean
    }

    let registros : registro[] = [
        {
            atividades : ['comer', 'passear'], presente : false
        },
        {
            atividades : ['estudar', 'arrumar a casa'], presente : true
        }
    ]

    console.log(registros[0].atividades)
    console.log(registros[1].presente)

}

