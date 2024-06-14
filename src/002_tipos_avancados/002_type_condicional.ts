/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */

// Condicional Types

/*
Os tipos condicionais em TypeScript permitem definir tipos baseados em condições.
Eles são semelhantes aos operadores ternários (`? :`) em JavaScript, mas para tipos.
A sintaxe básica de um tipo condicional é:

T extends U ? X : Y

Onde:
- `T` é o tipo a ser testado
- `U` é o tipo contra o qual `T` é testado
- `X` é o tipo resultante se `T` for atribuível a `U`
- `Y` é o tipo resultante se `T` não for atribuível a `U`
*/

// Exemplo de Tipos Condicionais

// 1. Verificação Simples

type isString<T> = T extends string ? 'yes' : 'no'

type A = isString<string> // "yes"
type B = isString<number> // "no"

const a: A = 'yes'

console.log(typeof a)

// 2. Tipos Condicionais Recursivos

// Os tipos condicionais recursivos podem ser usados recursivamente para criar tipos mais complexos

type Flatten<T> = T extends Array<infer U> ? Flatten<U> : T

type C = Flatten<number[][][]> // number
type D = Flatten<string[]>

// Uso Prático dos Tipos Condicionais

// 1. Filtrando Tipos

// Você pode usar tipos condicionais para criar tipos que filtram propriedades específicas de um tipo

type ExcludeType<T, U> = T extends U ? never : T

type E = ExcludeType<'a' | 'b' | 'c', 'a'> // 'b' | 'c'

// 2. Mapeando Tipos Condicionais

// Os tipos condicionais podem ser usados em tipos mapeados para criar tipos novos com base em condições aplicadas às propriedades

type Nullable<T> = { [K in keyof T]: T[K] | null }

type Person1 = {
  name: string
  age: number
}

type NullablePerson = Nullable<Person>

/*
type NullablePerson = {
    name: string | null
    age: number | null
}
*/

// Exemplos Detalhados

// Transformação de Tipos com Condicionais

// 1. Extraindo os Tipos de Parâmetros de Funções

type ParametersType<T> = T extends (...args: infer P) => any ? P : never

function exampleFunc(x: number, y: string): void {}

type Params = ParametersType<typeof exampleFunc> // [number, string]

// 2. Removendo Tipos de uma União

type NonNullable2<T> = T extends null | undefined ? never : T
type F = NonNullable2<string | number | null | undefined> // string | number

// 3. Selecionando Tipos com Base em Propriedades

type HasAge<T> = T extends { age: number } ? T : never

type PersonWithAge = HasAge<{ name: string; age: number }> // { name: string; age: number }
type NotPersonWithage = HasAge<{ name: string }> // never

/*
Os tipos condicionais são uma poderosa ferramenta no TypeScript para criar tipos dinâmicos e flexíveis. 
Eles permitem definir regras complexas para manipulação e transformação de tipos, tornando o código mais robusto e expressivo
*/
