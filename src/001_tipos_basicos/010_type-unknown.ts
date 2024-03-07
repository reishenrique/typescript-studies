/* eslint-disable prefer-const */
// Type Unknown

let unkownVariable: unknown

unkownVariable = 10
// Neste ponto, você não pode fazer operações com valor diretamente
// unknownVariable + 5 - Isso resultaria em um erro de compilação

// Você precisa verificar o tipo antes de realizar operações
if (typeof unkownVariable === 'number') {
  let resultUnknownType1 = unkownVariable + 5 // Agora irá executar porque o tipo foi verificado
  console.log(resultUnknownType1)
}

// Utilizando uma assertiva de tipo 'as'
let resultUnknownType2 = (unkownVariable as number) + 5 // Atenção aqui
console.log(resultUnknownType2)
