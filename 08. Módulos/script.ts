// Módulos

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

import importGreet from "./exports.js"; // OK
// import importGreet from "./export.ts"; => ERRO

importGreet(); // Olá, esta é uma função importada de outro arquivo.

//
// 2 - IMPORTANDO VARIÁVEIS
//
// para importar variáveis, será necessário utilizar o destructuring

import { testeExport } from "./exports.js"; // OK
console.log(testeExport); // Essa variável é um teste de exportar

//
// 3 - IMPORTANDO MULTIPLAS EXPORTAÇÕES
//

import { a, b, myFunction } from "./exports.js"; // OK

console.log(a); // 10
console.log(b); // Teste
myFunction(); // Função importada

//
// 4 - ALIAS
//

// para importar com alias, basta usar a palavra "as"
// isso mudará o nome do que foi importado, mas manterá o conteúdo
// é como se disessemos "quero X valor, mas com o nome Y"

import { someName as commonName } from "./exports.js";

console.log(commonName); // Teste

//
// 5 - IMPORTANDO TUDO
//

// é possível importar TUDO vindo de um arquivo
// para isso, usamos o asterisco "*"
// o retorno será em formato de um objeto

import * as myImports from "./exports.js";

console.log(myImports.n1); // 10
console.log(myImports.n2); // 20
console.log(myImports.n3); // 30

// é possível importar tudo e usar o destructuring

import * as myImports2 from "./exports.js";

const { n1, n2, n3 } = myImports2;

console.log(n1); // 10
console.log(n2); // 20
console.log(n3); // 30

//
// 6 - IMPORTANDO TIPOS COM TS
//

import { Human } from "./exports.js";

// o dado terá o tipo da interface Human importada
let teste: Human = {
	name: "João",
	age: 20,
};
