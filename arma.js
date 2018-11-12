"use strict";
exports.__esModule = true;
var arma = /** @class */ (function () {
    function arma(projeteis, capacidade) {
        this.capacidade = capacidade;
        this.projeteisNoPente = projeteis;
    }
    arma.prototype.atirar = function (N) {
        if (this.projeteisNoPente == 0) {
            console.log('Não há balas, pegue o fuzil');
        }
        else {
            this.projeteisNoPente = this.projeteisNoPente - N;
            console.log('PEI');
        }
    };
    arma.prototype.recarregar = function () {
        this.projeteisNoPente = this.capacidade;
    };
    arma.prototype.informarBalas = function () {
        return this.projeteisNoPente;
    };
    return arma;
}());
exports["default"] = arma;
