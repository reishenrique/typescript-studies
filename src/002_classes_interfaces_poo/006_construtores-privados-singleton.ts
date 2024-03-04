/* eslint-disable no-use-before-define */
/* eslint-disable no-useless-constructor */

// Construtores privados e Singleton (GoF)

export class Database {
  private static database: Database

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`)
  }

  // Verificando se já existe um instância da classe, se não, irá criar apenas uma - Singleton
  // Criando um método dentro da classe que cria outro objeto - Factory Method

  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) {
      console.log('Retornando instância já criada')
      return Database.database
    }

    console.log('Criando nova instância')
    Database.database = new Database(host, user, password)

    return Database.database
  }
}

// Todos os 'dbs' terão o mesmo valor que o primeiro 'db' instânciado, serão o mesmo objetos
const db1 = Database.getDatabase('localhost', 'root', '12345')
db1.connect()

const db2 = Database.getDatabase('localhost', 'root', '12345')
db2.connect()

const db3 = Database.getDatabase('localhost', 'root', '12345')
db3.connect()
