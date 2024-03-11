/* eslint-disable @typescript-eslint/no-unused-vars */

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

// 3. keyof

// Definindo um tipo para representar um objeto com várias propriedades
type Car = {
  brand: string
  model: string
  year: number
}

// Função que recebe um objeto e uma chave e retorna o valor da chave se ela existir no objeto
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] | undefined {
  return obj[key]
}

// Objeto de exemplo
const car: Car = {
  brand: 'Toyota',
  model: 'Corolla',
  year: 2000,
}

// Acessando propriedades do objeto de forma dinâmica
const brand: string | undefined = getProperty(car, 'brand') // Saída 'Toyota'
const model: string | undefined = getProperty(car, 'model') // Saída: 'Corolla'
const year: number | undefined = getProperty(car, 'year') // Saída: 2020
// const color: string | undefined = getProperty(car, 'color') // Saída: undefined, porque 'color' não é uma propriedade de Car

// 4. Outro exemplo utilizando o keyof

const colorsObj = {
  vermelho: 'red',
  azul: 'blue',
  verde: 'green',
}

type ColorsObj = typeof colorsObj
type ColorsKey = keyof ColorsObj

function translateColor(color: ColorsKey, colors: ColorsObj): string {
  return colors[color]
}

console.log(translateColor('azul', colorsObj))
