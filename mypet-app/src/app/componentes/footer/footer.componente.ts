import { Component } from '@angular/core'

@Component({
    // selector é nome para o componente
    selector: 'footer',
    templateUrl: './footer.componente.html'
})

export class footerComponente {
    //property binding
    
    imagem: string;


exibirImagem(): void{
this.imagem = "./../../assets/img/ff.gif"
}

ocultarImagem(): void{
    this.imagem = "./../../assets/img/ff.gif"
    }



}