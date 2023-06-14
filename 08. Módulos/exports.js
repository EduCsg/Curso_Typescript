"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.n3 = exports.n2 = exports.n1 = exports.someName = exports.myFunction = exports.b = exports.a = exports.testeExport = void 0;
// 1 - EXPORTANDO FUNÇÕES
function importGreet() {
    console.log("Olá, esta é uma função importada de outro arquivo.");
}
exports.default = importGreet;
// 2 - EXPORTANDO VARIÁVEIS
// para exportar variáveis, basta utilizar a palavra "export"
exports.testeExport = "Essa variável é um teste de exportar";
// 3 - MULTIPLAS EXPORTAÇÕES
// para isso, usamos export em cada um dos dados
// e todos devem ser chamados via destructuring
exports.a = 10;
exports.b = "Teste";
function myFunction() {
    console.log("Função importada");
}
exports.myFunction = myFunction;
// 4 - ALIAS
exports.someName = "Teste";
// 5 - EXPORTANDO TUDO
exports.n1 = 10;
exports.n2 = 20;
exports.n3 = 30;
