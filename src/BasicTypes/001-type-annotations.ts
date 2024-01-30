/* eslint-disable */

// Type Annotations

const nome: string = 'Henrique' // Qualquer tipo de string: '', "", ``
const idade: number = 1000 // Qualquer tipo de número
const bool: boolean = true || false // True ou False
const symbol: symbol = Symbol('any-symbol') // Symbol

// Arrays
const arrayOfNumbers: Array<number> = [1,2,3,4,5] // Declarando um array de números
const arrayofNumbers2: number[] = [6,7,8,9,10] // Outra maneira de declarar o tipo de um array

const arrayOfStrings: Array<string> = ['Henrique', 'Reis'] // Declarando um array de string
const arrayOfStrings2: string[] = ['Renato', 'Reis'] // Outra maneira de declara o tipo de um array

// Objects
// Criando um objeto e tipando ele com as propriedades
const propOfPerson: { name: string, age: number, adult?: boolean } = {    
    name: 'Henrique',
    age: 25,
    adult: true
}

console.log(`Type of this object is: ${typeof(propOfPerson)}`)

// Functions
// Função de soma tipando os parâmetros (x e y) e o retorno da função (após o fechamento do parênteses (:number))
function sum(x: number, y: number): number {
    return x + y
}

const sum2: (x: number, y: number) => number = (x, y) => x + y // Outra maneira de criar uma função tipada (ninguém usa dessa maneira)

const result: number = sum(123333, 12234023)
const result2: number = sum2(157, 122)