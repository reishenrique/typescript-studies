/* 
For é usado quando você sabe antecipadamente quantas vezes deseja iterar
sobre um bloco de código
*/

const array = [1, 2, 3, 4, 5]

for (let i = 0; i < array.length; i++) {
  console.log(array[i]) // Imprime cada elemento do array
}

/* 
Sabendo que o array tem 5 elementos, quero iterar cada um até que a expressão:
'i < array.length' seja falsa
*/
