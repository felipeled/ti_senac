import { Component } from '@angular/core'

@Component({
    // selector é nome para o componente
    selector: 'main',
    templateUrl: './main.componente.html'
})

export class mainComponente {
    public testemain: string = 'dddd'
    public imagem: string = './../../../assets/img/a.gif'
    public imagem2: string = './../../assets/img/ff.gif'
}