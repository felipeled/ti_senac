export default class arma{

private calibre: string
private marca: string
private tipo: string
protected capacidade: number
protected projeteisNoPente: number


constructor(projeteis: number, capacidade: number){
    this.capacidade = capacidade
    this.projeteisNoPente = projeteis

}


public atirar(N:number): void{
    if (this.projeteisNoPente == 0){
    console.log('Não há balas, pegue o fuzil')
    }
    else{ 
    this.projeteisNoPente = this.projeteisNoPente - N
    console.log('PEI')
    }
}

public recarregar(): void{
    this.projeteisNoPente = this.capacidade

}

public informarBalas(): number{
    return this.projeteisNoPente

}

}