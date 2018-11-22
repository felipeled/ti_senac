import { Component, Input } from '@angular/core'

@Component({
    // selector é nome para o componente
    selector: 'desafio',
    templateUrl: './index.html'
})

export class desafio {
    //property binding

    public x1: string;
    public x2: string;

dispararvalor(valor: Event): void{
this.x1 = ((<HTMLInputElement>valor.target).value)
this.x2 = this.x1;
}
}