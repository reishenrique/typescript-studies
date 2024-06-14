/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */

// Infer Type

/*
O tipo `infer` em TypeScript é usado dentro de tipos condicionais para declarar uma variável de tipo,
que pode ser inferida a partir de uma expressão. Ele é particularmente útil quando você deseja capturar e
reutilizar um tipo derivado de outro tipo, especialmente em contextos complexos como tipos de retorno de
funções ou elementos de tuplas e arrays

Sintaxe do `infer`

- A sintaxe básica para usar `infer` é dentro de um tipo condicional, geralmente em conjunto com `extends`.

T extends infer U ? X : Y

Onde: 
- `T` é o tipo que está sento testado
- `U` é a variável de tipo que será inferida a partir de `T` se `T` satisfizer a condição
- `X` é o tipo resultante se a inferência for bem-sucedida.
- `Y` é o tipo resultante se a inferência falhar
*/

// Exemplos de Uso do `infer`

// 1. Extraindo o tipo de retorno de uma função

// Um dos uso mais comuns do `infer` é extrair o tipo de retorno de uma função

type ReturnType2<T> = T extends (...args: any[]) => infer R ? R : any

function exampleFunction(): number {
  return 42
}

type ExampleReturnType = ReturnType2<typeof exampleFunction> // number

/*
Nesse exemplo, `ReturnType2` é um tipo condicional que verifica se `T` é uma função. 
Se for, ele infere o tipo de retorno da função (`infer R`) e retorna esse tipo. Caso contrário, retorna `any`
*/

// 2. Extraindo Tipos de Parâmetros de Funções

// De uma forma semelhante, você pode usar `infer` para extrair os tipos dos parâmetros de uma função

type ParametersType2<T> = T extends (...args: infer P) => any ? P : never

function exampleFunction2(x: number, y: string): void {}

type Params2 = ParametersType2<typeof exampleFunction2> // [number, string]

/*
Nesse exemplo, `ParametersType` infere os tipos dos parâmetros da função e retorna esse tipos como uma tupla
*/

// 3. Extraindo tipos de Elementos de Tuplas ou Arrays

// Você também pode usar `infer` para extrair tipos de elementos de tuplas ou arrays

type ElementType<T> = T extends (infer U)[] ? U : never

type ExampleArray = number[]
type ExampleElementType = ElementType<ExampleArray> // number

/*
Nesse exemplo, `ElementType` verifica se `T` é um array (`T extends (infer U)[]`).
Se for, ele infere o tipo dos elementos do array (`infer U`) e retorna esse tipo.
*/

// 4. Manipulando Tuplas com `infer`

// `infer` é útil para manipulações mais avançadas de tuplas, como extrair o primeiro elemento de uma tupla

type FirstElement<T> = T extends [infer U, ...any[]] ? U : never

type Tuple = [string, number, boolean]
type First = FirstElement<Tuple> // string

/*
Nesse exemplo, `FirstElement` verifica se `T` é uma tupla que começa com um elemento (`[infer U, ...any[]]`).
Se for, ele infere o tipo do primeiro elemento (`infer U`) e retorna esse tipo.
*/

/*
- Em resumo, o `infer`, é uma ferramente poderosa para capturar e reutilizar tipos dentro de tipso condicionais.
- Ele permite que você crie tipos mais dinâmicos e flexíveis, ajudando a extrair e manipular informações de tipos complexos.
- Essa capacidade é especialmente útil para bibliotecas e frameworks que precisam trabalhar com uma variedade de tipos genéricos e composições de tipos.

*/
