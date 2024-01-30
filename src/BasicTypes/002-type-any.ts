// Tipo any

function showMessage(msg: any): any {
  return msg
}

console.log(showMessage('Exemplo de mensagem em string'))
console.log(showMessage(12345)) // Função recebendo e retornando números
console.log(showMessage([1, 2, 3])) // Função recebendo um array e retornando
console.log(showMessage({ name: 'Henrique', age: 25 })) // Função recebendo um objeto e retornando
