import {pessoa} from './pessoa'

export class paciente extends pessoa {
    private nomePaciente: string = 'Paciente'
    private senhaPaciente: number = 123

    public logar(): void{
        if(this.senha == this.senhaPaciente && this.nome == this.nomePaciente){
        console.log('Paciente logado com sucesso')
        }
        else{
            console.log('Invasao de hacker, chamar tecnico')
        }
    }
}