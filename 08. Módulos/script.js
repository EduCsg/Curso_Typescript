"use strict";
// Módulos
Object.defineProperty(exports, "__esModule", { value: true });
// Os módulos servem para organizar o código em arquivos separados.
// Através deles, é possível importar e exportar código entre arquivos.
// comummente, os módulos são exportados como default
// para importar, basta usar o "import 'nome do arquivo'"
// No typescript, criaremos um arquivo .ts porém será importado como .js
// Para executar os arquivos com módulos, usaremos o Node.js
// Para isso, vamos criar um arquivo TS, compilar para JS, exportar e importar o .JS
// Caso seja utilzado o "export default", basta importar normalmente
// se foi apenas o "export" comum, é necessário importar via destructuring
//
// 1 - IMPORTANDO ARQUIVOS
//
var exports_js_1 = require("./exports.js"); // OK
// import importGreet from "./export.ts"; => ERRO
(0, exports_js_1.default)(); // Olá, esta é uma função importada de outro arquivo.
//
// 2 - IMPORTANDO VARIÁVEIS
//
// para importar variáveis, será necessário utilizar o destructuring
var exports_js_2 = require("./exports.js"); // OK
console.log(exports_js_2.testeExport); // Essa variável é um teste de exportar
//
// 3 - IMPORTANDO MULTIPLAS EXPORTAÇÕES
//
var exports_js_3 = require("./exports.js"); // OK
console.log(exports_js_3.a); // 10
console.log(exports_js_3.b); // Teste
(0, exports_js_3.myFunction)(); // Função importada
//
// 4 - ALIAS
//
// para importar com alias, basta usar a palavra "as"
// isso mudará o nome do que foi importado, mas manterá o conteúdo
// é como se disessemos "quero X valor, mas com o nome Y"
var exports_js_4 = require("./exports.js");
console.log(exports_js_4.someName); // Teste
//
// 5 - IMPORTANDO TUDO
//
// é possível importar TUDO vindo de um arquivo
// para isso, usamos o asterisco "*"
// o retorno será em formato de um objeto
var myImports = require("./exports.js");
console.log(myImports.n1); // 10
console.log(myImports.n2); // 20
console.log(myImports.n3); // 30
// é possível importar tudo e usar o destructuring
var myImports2 = require("./exports.js");
var n1 = myImports2.n1, n2 = myImports2.n2, n3 = myImports2.n3;
console.log(n1); // 10
console.log(n2); // 20
console.log(n3); // 30
// o dado terá o tipo da interface Human importada
var teste = {
    name: "João",
    age: 20,
};
