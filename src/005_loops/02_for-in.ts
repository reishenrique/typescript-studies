/* 
Iteração sobre as chaves do objeto: O for in itera sobre as chaves de um objeto
Permitindo acessar os valores correspondentes às chaves utilizando a notação de colchete []
*/

// Objeto
const obj = { a: 1, b: 2, c: 3, d: 4 }

// Para cada chave (key) in obj (objeto) faça:
for (const key in obj) {
  console.log(key + ':' + obj[key]) // Output: a:1, b:2, c:3, d:4
}

// obj[key] - Acessa o valor que a chave do objeto armazena
