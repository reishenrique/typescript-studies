// Utilizando generics com classes (implementando uma stack)

class Stack<T> {
  private elementos: T[]

  constructor() {
    this.elementos = []
  }

  // Adiciona um elemento no topo da pilha
  push(elemento: T): void {
    this.elementos.push(elemento)
  }

  // Remove e retorna o elemento no topo da pilha
  pop(): T | undefined {
    return this.elementos.pop()
  }

  // Retorna o elemento no topo da pilha sem removê-lo
  peek(): T | undefined {
    return this.elementos[this.elementos.length - 1]
  }

  // Retorna o tamanho da pilha
  length(): number {
    return this.elementos.length
  }

  // Verifica se a pilha está vazia
  isEmpty(): boolean {
    return this.length() === 0
  }

  // Limpa a pilha
  cleanStack(): void {
    this.elementos = []
  }
}

// Exemplos de uso
const pilha: Stack<number> = new Stack<number>()

pilha.push(1)
pilha.push(2)
pilha.push(3)

console.log('Elemento no topo: ', pilha.peek()) // Output: 3
console.log('Tamanho da pilha: ', pilha.length()) // Output: 3

console.log('Removendo o último elemento: ', pilha.pop()) // Output: 3
console.log('Tamanho da pilha após remover o último elemento: ', pilha.length()) // Output: 2

console.log('A pilha está vazia? ', pilha.isEmpty()) // Output: false

pilha.cleanStack()
console.log('A pilha está vazia após limpar? ', pilha.isEmpty()) // Output: True

// Nesta implementação, 'T' é um tipo genérico que pode ser substituído por qualquer tipo de dado.
// Isso permite que a pilha armazene diferentes tipos de elementos
