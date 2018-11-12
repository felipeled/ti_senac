import {pessoa} from './pessoa'
import {medico} from './medico'
import {paciente} from './paciente'
import {operador} from './operador'


let logMedico = new medico ('Medico',123)
logMedico.logar()

let logPaciente = new paciente ('Paciente',123)
logPaciente.logar()

let logOperador = new operador ('Operador',123)
logOperador.logar()
