function questão_1() {
    let teste = {
        nome: "josé",
        curso: "info",
        ativo: true,
    };

    teste.ativo = false;
    console.log(teste);
}

function questão_2() {
    let sala = {
        alunos: [],
    };
    sala.alunos.splice(0, 0, "pedro", "josé", "carlos");
    console.log(sala);
    console.log(sala.alunos.length);
}

function questão_3() {
    let registro = {
        presente: true,
        "horário entrada": "07:30",
    };
    console.log(registro.presente, registro["horário entrada"]);
}

function questão_4() {
    let pessoa = {
        nome: "pedro",
        idade: 16,
        apresentar: function () {
            console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos`);
        },
    };
    pessoa.apresentar();
}

function questão_5() {
    let produto = {
        nome: "iphone77",
        preco: 123456789,
    };
    produto.emEstoque = true;
    delete produto.preco;
    console.log(
        "preco" in produto
            ? "Ainda há atributo preco"
            : "Não há mais atributo preço",
    );
    console.log(produto);
}

function questão_6() {
    function adicionarPropriedade(objeto, chave, valor) {
        objeto[chave] = valor;
        return objeto;
    }
    let novo_obj = {};
    console.log(adicionarPropriedade(novo_obj, "nome", "pedro"));
}

function questão_7() {
    let registroDiario = {
        atividades: [],
        presente: true,
    };
    registroDiario.atividades.splice(0, 0, "comer", "dormir", "estudar");
    registroDiario.presente = false;
    console.log(registroDiario);
}

function questão_8() {
    let registros = [
        {
            atividades: ["comer", "passear"],
            presente: false,
        },
        {
            atividades: ["estudar", "arrumar a casa"],
            presente: true,
        },
    ];
    console.log(registros[0].atividades);
    console.log(registros[1].presente);
}


