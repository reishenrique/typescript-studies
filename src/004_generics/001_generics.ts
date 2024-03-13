// Generics - Exemplos

// 1. Função genérica para retornar o primeiro elemento de um array
function primeiroElemento<T>(array: T[]): T | undefined {
  return array.length > 0 ? array[0] : undefined
}

const numeros: number[] = [1, 2, 3, 4, 5]
const primeiroNumero: number | undefined = primeiroElemento(numeros)
console.log(primeiroNumero) // Output: 1

const strings: string[] = ['um', 'dois', 'tres', 'quatro', 'cinco']
const primeiraLetra: string | undefined = primeiroElemento(strings)
console.log(primeiraLetra) // Output: 'um'

// 2. Interface genérica para definir uma coleção de elementos do mesmo tipo
interface Colecao<T> {
  adicionar(item: T): void
  remover(item: T): void
  tamanho(): number
}

// 3. Implementação de uma classe genérica usando a interface Colecao
class MinhaColecao<T> implements Colecao<T> {
  private elementos: T[] = []

  adicionar(item: T): void {
    this.elementos.push(item)
  }

  remover(item: T): void {
    const index = this.elementos.indexOf(item)
    if (index !== -1) {
      this.elementos.splice(index, 1)
    }
  }

  tamanho(): number {
    return this.elementos.length
  }
}

// Uso da classe MinhaColecao
const colecaoDeNumeros = new MinhaColecao<number>()
colecaoDeNumeros.adicionar(1)
colecaoDeNumeros.adicionar(2)
console.log(colecaoDeNumeros.tamanho()) // Output: 2

const colecaoDeStrings = new MinhaColecao<string>()
colecaoDeStrings.adicionar('foo')
colecaoDeStrings.adicionar('bar')
console.log(colecaoDeStrings.tamanho()) // Output: 2
