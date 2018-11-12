import arma from './arma'

export default class metralhadora extends arma {

    private TirosPsegundo: number

    constructor(projeteis: number, capacidade: number, TirosPsegundo: number){
        super(projeteis, capacidade )
        this.TirosPsegundo = TirosPsegundo
        
                
    }

    public atirar(): void{
            if (this.projeteisNoPente == 0){
            console.log('Não há balas, por favor recarregue')
            }
            else{ 
                this.projeteisNoPente -= this.TirosPsegundo
                for(var x=0; x<= this.TirosPsegundo; x++){
            this.projeteisNoPente = this.projeteisNoPente - 1
            console.log('TÁ')
            }
            console.log('Você ainda possui '+this.informarBalas()+' balas')
        }

} 

}