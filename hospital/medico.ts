import {pessoa} from './pessoa'

export class medico extends pessoa {
    private nomeMedico: string = 'Medico'
    private senhaMedico: number = 123

    public logar(): void{
        if(this.senha == this.senhaMedico && this.nome == this.nomeMedico){
        console.log('Medico logado com sucesso')
        }
        else{
            console.log('Invasao de hacker, chamar tecnico')
        }
    }
}