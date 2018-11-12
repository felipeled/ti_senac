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
var pessoa_1 = require("./pessoa");
var medico = /** @class */ (function (_super) {
    __extends(medico, _super);
    function medico() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nomeMedico = 'Medico';
        _this.senhaMedico = 123;
        return _this;
    }
    medico.prototype.logar = function () {
        if (this.senha == this.senhaMedico && this.nome == this.nomeMedico) {
            console.log('Medico logado com sucesso');
        }
        else {
            console.log('Invasao de hacker, chamar tecnico');
        }
    };
    return medico;
}(pessoa_1.pessoa));
exports.medico = medico;
