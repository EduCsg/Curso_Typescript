/*
  A principal função do TS é poder definir os tipos dos dados.
  É possível definir o tipo de uma variável, parâmetro de função, retorno de função, etc.

  Isso garante a qualidade do código, pois o TS vai apontar erros de tipos de dados
  antes mesmo de executar o código, ou seja, NÓS apontamos ate onde o código pode ir.

  Como consequência, o código fica mais legível e mais fácil de dar manutenção, além
    de ficar mais "correto".                                                     
    
  Os tipos primitivos são: Boolean, Number, String.                                  */

// - - - - - - - - Number - - - - - - - -
// - - - - - - - - Number - - - - - - - -
// - - - - - - - - Number - - - - - - - -

let num: number = 10;
// num = "teste"; => type 'string' is not assignable to type 'number'

num = 124.123; // Float também é entendido como um type number

console.log(typeof num); // number

console.log(num + num); // 248.246 (SOMA)

// - - - - - - - - String - - - - - - - -
// - - - - - - - - String - - - - - - - -
// - - - - - - - - String - - - - - - - -

let txt: string = "texto";
// txt = 123; => type 'number' is not assignable to type 'string'

console.log(typeof txt); // string
console.log(txt.toUpperCase()); // é possível gerar métodos de strings apenas no tipo "String"

// num.toUpperCase() => Property 'toUpperCase' does not exist on type 'number'
// txt.fixed(); => Property 'fixed' does not exist on type 'string'

console.log(txt + txt); // textotexto (CONCATENAÇÃO)

// - - - - - - - - Boolean - - - - - - - -
// - - - - - - - - Boolean - - - - - - - -
// - - - - - - - - Boolean - - - - - - - -

let bool: boolean = true;

console.log(typeof bool); // boolean

// bool = "teste"; => type 'string' is not assignable to type 'boolean'
// bool = 0; => type '0' is not assignable to type 'boolean'

// console.log(bool.toUpperCase()); => Property 'toUpperCase' does not exist on type 'boolean'

// - - - - - - - - Anotation x Inference - - - - - - - -
// - - - - - - - - Anotation x Inference - - - - - - - -
// - - - - - - - - Anotation x Inference - - - - - - - -

/*
  Existem duas maneiras de declarar o tipo de uma variável:

  1. Type annotation: quando definimos o tipo da variável na declaração.
  2. Type inference: quando o TS infere o tipo da variável a partir do valor atribuído.
  */

let annotation: string = "Teste";
let inference = "Teste";

console.log(typeof annotation); // string
console.log(typeof inference); // string

// annotation = 2; => Type '2' is not assignable to type 'string'
// inference = 2; => Type '2' is not assignable to type 'string'
