// Type Guards - Refinando Tipos

export function add(a: unknown, b: unknown): string | number {
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`
}

console.log(add(1, 5))
console.log(add('a', 'b'))

// Outro exemplo
type MyType = string | number

// Função que atua como type guard
function isString(value: MyType): value is string {
  return typeof value === 'string'
}

// Utilizando o type guard
const example: MyType = 'Hello'

if (isString(example)) {
  console.log('É uma string:', example.toUpperCase())
} else {
  console.log('Não é uma string')
}

// Método utilizados para realizar type guard também

// 1. instanceof

class MyClass {
  doSomething() {
    console.log('Doing something')
  }
}

const instance: any = new MyClass()

if (instance instanceof MyClass) {
  instance.doSomething() // Acesso a métodos de MyClass sem necessidade de casting
}

// 2. typeof

const example2: any = 'Hello'

if (typeof example2 === 'string') {
  console.log('É uma string:', example.toUpperCase())
}
