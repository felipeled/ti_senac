import { Component } from '@angular/core'

@Component({
    // selector é nome para o componente
    selector: 'header',
    templateUrl: './header.componente.html'
})

export class HeaderComponente {
    //property binding
    public teste: string = 'Valor'
}