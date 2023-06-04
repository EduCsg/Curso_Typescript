/*
  A principal função do TS é poder definir os tipos dos dados.
  É possível definir o tipo de uma variável, parâmetro de função, retorno de função, etc.

  Isso garante a qualidade do código, pois o TS vai apontar erros de tipos de dados
  antes mesmo de executar o código, ou seja, NÓS apontamos ate onde o código pode ir.

  Como consequência, o código fica mais legível e mais fácil de dar manutenção, além
    de ficar mais "correto".
    
  Os tipos primitivos são: Boolean, Number, String.                                  */
// Number
// Number
// Number
var num = 10;
// num = "teste"; => type 'string' is not assignable to type 'number'
num = 124.123; // Float também é entendido como um type number
console.log(typeof num); // number
console.log(num + num); // 248.246 (SOMA)
// String
// String
// String
var txt = "texto";
// txt = 123; => type 'number' is not assignable to type 'string'
console.log(typeof txt); // string
console.log(txt.toUpperCase()); // é possível gerar métodos de strings apenas no tipo "String"
// num.toUpperCase() => Property 'toUpperCase' does not exist on type 'number'
// txt.fixed(); => Property 'fixed' does not exist on type 'string'
console.log(txt + txt); // textotexto (CONCATENAÇÃO)
// Boolean
// Boolean
// Boolean
var bool = true;
console.log(typeof bool); // boolean
// bool = "teste"; => type 'string' is not assignable to type 'boolean'
// bool = 0; => type '0' is not assignable to type 'boolean'
// console.log(bool.toUpperCase()); => Property 'toUpperCase' does not exist on type 'boolean'
