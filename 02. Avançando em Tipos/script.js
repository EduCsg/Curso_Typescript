// - - - - - - - - Arrays - - - - - - - -
// - - - - - - - - Arrays - - - - - - - -
/*Para declarar um tipo array em TS, a sintaxe é diferente

  É possível declarar o tipo de dados que o array irá armazenar, como
    String, Number, etc.                                          */
var arrNumber = [1, 2, 3];
var arrBool = [true, false, true];
var arrString = ["a", "b", "c"];
// let arrNumber: Array<number> = [1, 2, 3];
// let arrString: Array<string> = ["a", "b", "c"];
// let arrBool: Array<boolean> = [true, false, true];
arrNumber.push(4); // OK
// arrNumber.push("d"); // Error
arrString.push("d"); // OK
// arrString.push(4); // Error
arrBool.push(false); // OK
// arrBool.push(4); // Error
// - - - - - - - - Any - - - - - - - -
// - - - - - - - - Any - - - - - - - -
/*O any transmite qualquer tipo de variável
  
  Deve ser evitado ao máximo possível, pois não é possível ter certeza
    do tipo de dado que está sendo recebido
  
  Casos de uso:
    - O dado é irrelevante
    - Arrays com vários tipos de dados */
var qqr = 10;
qqr = "string";
qqr = true;
qqr = [1, "string", true];
qqr = { a: 1, b: "string", c: true };
// - - - - - - - - Parâmetros - - - - - - - -
// - - - - - - - - Parâmetros - - - - - - - -
/* É possível setar o tipo de cada parâmetro esperado dentro de uma função */
function soma(a, b) {
    return a + b;
}
console.log(soma(1, 2)); // 3
// console.log(soma(1, "2")); // Error
// - - - - - - - - Retorno - - - - - - - -
// - - - - - - - - Retorno - - - - - - - -
/* É possível setar o tipo de retorno de uma função */
//       nome (p: tipo  , p: tipo  ): tipoRetorno { ... }
function soma2(a, b) {
    // return "teste"; -> Error
    return a + b; // OK
}
console.log(soma2(1, 2)); // 3
function nome(n, age) {
    // Isso se torna possível pois o tipo de retorno foi definido como string,
    // o parâmetro "age" está sendo convertido no return
    return "O ".concat(n, " tem ").concat(age, " anos!");
}
console.log("Eduardo", 18); // O Eduardo tem 18 anos!
// - - - - - - - - Funções Anônimas - - - - - - - -
// - - - - - - - - Funções Anônimas - - - - - - - -
/* É possível com o TypeScript setar funções anônimas,
    sem declarar nomes para elas.
    
  Isso é útil em casos como métodos não existentes, por exemplo */
setTimeout(function () {
    var sallary = 1000;
    // console.log(parseFloat(sallary)); -> Argument of type 'number' is not assignable to parameter of type 'string'.
    console.log(parseFloat(sallary.toString())); // 1000
}, 2000);
// - - - - - - - - Tipos de Objetos - - - - - - - -
// - - - - - - - - Tipos de Objetos - - - - - - - -
/* Podemos também determinar os tipos para itens de objetos,
    A sintaxe baseia em { prop: tipo, prop2: tipo, prop3: tipo }
    
  Dessa maneira, o objeto só aceitará os tipos definidos */
// É obrigatório que os dados passados para o parâmetro tenham
// NOME e TIPO iguais aos definidos na função
function passCoordinates(coord) {
    console.log("X coord: ".concat(coord.x, " | Y coord: ").concat(coord.y));
}
var objCoord = {
    x: 10,
    y: 20,
};
passCoordinates(objCoord); // X coord: 10 | Y coord: 20
passCoordinates({ x: 100, y: 200 }); // X coord: 100 | Y coord: 200
// passCoordinates({ x: "100", y: "200" }); // Error
var pessoaObj = {
    nome: "Eduardo",
    idade: 18,
};
// - - - - - - - - Propriedades Opcionais - - - - - - - -
// - - - - - - - - Propriedades Opcionais - - - - - - - -
/* Propriedades opcionais são utilizadas nos parâmetros ou definição
    dos tipos de dados contidos dentro de um objeto, função, etc
    
  Para adicionar um opcional, basta adicionar uma ? na prop */
function showNumbers(a, b, c) {
    // console.log("A:" + a, "B:" + b, "C:" + c);
    c
        ? console.log("A:" + a, "B:" + b, "C:" + c)
        : console.log("A:" + a, "B:" + b);
}
showNumbers(1, 2, 3); // A:1 B:2 C:3
showNumbers(1, 2); // A:1 B:2
// showNumbers(1) // Error
// - - - - - - - - Validação de Props Opcionais - - - - - - - -
// - - - - - - - - Validação de Props Opcionais - - - - - - - -
/* Isso serve para caso a Prop não seja passada, não gere um erro ou retorne
    um Undefined no código. */
// PS: Os argumentos opcionais devem estar a frente dos obrigatórios
// function advancedGreeting(firstName?: string, lastName: string) { => ERRO
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return "Ol\u00E1, ".concat(firstName, " ").concat(lastName, "!");
    }
    return "Ol\u00E1, ".concat(firstName, "!");
}
console.log(advancedGreeting("Eduardo")); // Olá, Eduardo!
console.log(advancedGreeting("Eduardo", "Casagrande")); // Olá, Eduardo Casagrande!
// - - - - - - - - Union Types - - - - - - - -
// - - - - - - - - Union Types - - - - - - - -
/* Union Types são uma alternativa melhor do que o Any, pois
        aceita múltiplos tipos de dados */
function unionType(a) {
    console.log(a);
}
unionType(1); // 1
unionType("1"); // 1
// unionType(false) => ERRO
var arrUnion = [1, "1", true];
// Também é possível utilizar condicionais baseado no tipo de dado recebido
function showUserRule(role) {
    if (typeof role === "boolean") {
        return "Usuário boolean";
    }
    return "Usuário string";
}
console.log(showUserRule(false)); // Usuário boolean
console.log(showUserRule("true")); // Usuário string
function showId(id /* id: string | number */) {
    console.log("O ID \u00E9 ".concat(id));
}
showId(1); // O ID é 1
showId("1"); // O ID é 1
var numObj = {
    x: 1,
    y: 2,
    z: 3,
};
function showNumbers2(
/* obj: { x: number; y: number; z: number } */
obj) {
    console.log("X: ".concat(obj.x, " | Y: ").concat(obj.y, " | Z: ").concat(obj.z));
}
showNumbers2(numObj); // X: 1 | Y: 2 | Z: 3
var somePerson = { name: "Eduardo", age: 18 };
// Adiciona uma nova propriedade
// type personType = { ERRO -> Duplicate identifier 'personType'.
// 	age: number;						-> Duplicate identifier 'personType'.
// };												-> Duplicate identifier 'personType'.
// - - - - - - - - Literal Types - - - - - - - -
// - - - - - - - - Literal Types - - - - - - - -
/* Permite que sejam colocados diversos valores como tipo
        para uma propriedade */
var teste;
// teste = 1; => ERRO
teste = "testando";
function showDirection(direction) {
    console.log(direction);
}
showDirection("left"); // left
// showDirection("teste"); => ERRO
// - - - - - - - - Non-Null Assertion - - - - - - - -
// - - - - - - - - Non-Null Assertion - - - - - - - -
/* O TypeScript costuma anunciar erros pois o valor de uma variável AINDA não foi definido
        para evitar isso, é possível utilizar o Null Assertion Operator, que é o ! */
var canBeNull;
// Mesmo não recebendo nada, o TypeScript não acusa erro pois foi utilizado o !
// que diz que o valor não será nulo
console.log(canBeNull.toString());
// - - - - - - - - BigInt - - - - - - - -
// - - - - - - - - BigInt - - - - - - - -
// Com o BigInt, é possível trabalhar com números maiores que 2^53 - 1
var maxNum = 9007199254740991;
var numBigInt = 90071992547409999999999999n;
// - - - - - - - - Symbol - - - - - - - -
// - - - - - - - - Symbol - - - - - - - -
/* Symbol é um tipo de dado único e imutável. Caso existam duas variáveis
com os mesmos valores, mas  sejam do tipo Symbol, serão diferentes 			*/
var symbol1 = Symbol("teste");
var symbol2 = Symbol("teste");
console.log(symbol1 == symbol2); // false
console.log(symbol1 === symbol2); // false
