export class pessoa{

    protected nome: string
    protected dt_nasc: number
    protected senha: number
    protected sexo: string

   constructor (nome: string, senha: number){
    this.senha = senha
    this.nome = nome
   }
}