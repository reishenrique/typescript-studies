/*
Classes em TypeScript - Moldes para objetos
Modificadores de acesso public, private e readonly
*/

class Collaborators {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    public readonly collaboratorName: string,
    public readonly collaboratorLastName: string,
  ) {}
}

class Company {
  public readonly companyName: string // Public não é necessário, causa redundancia
  private readonly collaborators: Collaborators[] = []
  protected readonly companyCnpj: string

  constructor(companyName: string, companyCnpj: string) {
    this.companyName = companyName
    this.companyCnpj = companyCnpj
  }

  addCollaborator(collaborator: Collaborators): void {
    this.collaborators.push(collaborator)
  }

  getCollaborators(): void {
    for (const collaborator of this.collaborators) {
      console.log(collaborator)
    }
  }
}

const company1 = new Company('Google', '11.111.111/0001-11')

const collaborator1 = new Collaborators('Henrique', 'Reis')
const collaborator2 = new Collaborators('Renato', 'Reis')
const collaborator3 = new Collaborators('Joel', 'Reis')

company1.addCollaborator(collaborator1)
company1.addCollaborator(collaborator2)
company1.addCollaborator(collaborator3)

company1.getCollaborators()
