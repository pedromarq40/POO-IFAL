const multiplicar = (a, b) => a * b;

function palindromo(str){
    if (str.length >= 2) {
        return str[0] === str[str.length-1] && palindromo(str.slice(1, -1))
    } else {
        return true
    }
}

function palindromo(arr){
    let s = 0
    for( let i of arr){
        s+=arr[i]
    }
    return s/arr.length
}

class ContaBancaria {
  #saldo; // Atributo privado
  constructor(saldoInicial = 0) {
    this.#saldo = saldoInicial;
  }
  // Método para depositar
  depositar(valor) {
    if (valor > 0) {
      this.#saldo += valor;
    } else {
        return -1
    }
  }
  // Método para sacar
  sacar(valor) {
    if (valor > 0 && valor <= this.#saldo) {
      this.#saldo -= valor;
      return valor;
    } else {
      return 0; // saque inválido
    }
  }
  // Getter para consultar saldo
  get saldo() {
    return this.#saldo;
  }
  // Setter para saldo (Erro proposital: deveria verificar valor >= 0)
  set saldo(novoSaldo) {
    if ( novoSaldo >= 0) {
        this.#saldo = novoSaldo; 
    } else {
        throw Error('Saldo não pode ser negativo')
    }
  }
}

const conta = new ContaBancaria(150)

console.assert(multiplicar(2, 3) === 6, "Teste 1 falhou")

try{
    conta.saldo = -100
    console.warn(error.message)
} catch(error){}

console.assert(conta.depositar(-1) == -1, "Teste 3 falhou")
console.assert(palindromo('arara') === true, "Teste 4 falhou")
console.assert(soma([1, 2, 2, 1]) === 1.5, 'Teste 5 falhou')