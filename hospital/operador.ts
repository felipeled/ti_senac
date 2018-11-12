import {pessoa} from './pessoa'

export class operador extends pessoa {
    private nomeOperador: string = 'Operador'
    private senhaOperador: number = 123

    public logar(): void{
        if(this.senha == this.senhaOperador && this.nome == this.nomeOperador){
        console.log('Operador logado com sucesso')
        }
        else{
            console.log('Invasao de hacker, chamar tecnico')
        }
    }
}