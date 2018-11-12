"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var arma_1 = require("./arma");
var metralhadora = /** @class */ (function (_super) {
    __extends(metralhadora, _super);
    function metralhadora(projeteis, capacidade, TirosPsegundo) {
        var _this = _super.call(this, projeteis, capacidade) || this;
        _this.TirosPsegundo = TirosPsegundo;
        return _this;
    }
    metralhadora.prototype.atirar = function () {
        if (this.projeteisNoPente == 0) {
            console.log('Não há balas, por favor recarregue');
        }
        else {
            this.projeteisNoPente -= this.TirosPsegundo;
            for (var x = 0; x <= this.TirosPsegundo; x++) {
                this.projeteisNoPente = this.projeteisNoPente - 1;
                console.log('TÁ');
            }
            console.log('Você ainda possui ' + this.informarBalas() + ' balas');
        }
    };
    return metralhadora;
}(arma_1["default"]));
exports["default"] = metralhadora;
