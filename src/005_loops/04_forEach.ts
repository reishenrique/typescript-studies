/* 
O método forEach() é uma função superior em JavaScript, utilizada para
executar uma determinada função em cada elemento do array.
*/

const forEachArray = [1, 2, 3, 4, 5]

forEachArray.forEach((value, index) => {
  console.log(`Somando valores do indice ${index} + 1: `, value + 1)
})

/* 
Neste exemplo, o forEach é utilizado para iterar sobre cada elemento do array
E uma função de callback é chamada para cada item

Pega o valor do índice 0 e soma + 1, por exemplo: valor do índice 0 é 1 + 1 e assim por diante
*/
