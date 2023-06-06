// - - - - - - - - Void - - - - - - - -
// - - - - - - - - Void - - - - - - - -
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/* Void é o tipo de função que não retorna nada dentro do Typescript
  
  Não é possível declara um return em uma função do tipo Void   */
function withoutReturn() {
    console.log("Função sem retorno");
    // return 'teste' => Type string is not assignable to type void
}
withoutReturn(); // Função sem retorno
// - - - - - - - - Callback como Argumento - - - - - - - -
// - - - - - - - - Callback como Argumento - - - - - - - -
/* É possível colocar uma função de Callback como argumento de outra função
  
  Além disso, podemos também definir o tipo aceito pela callback e tipo
    de retorno                                                        */
function greeting(name) {
    return "Ol\u00E1, ".concat(name);
}
// func     nome     p  param callback - tipo return - param funcao
function preGreeting(f, userName) {
    console.log("Preparando a função!");
    // const greet = f(2); ERRO
    var greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "Eduardo"); // Olá, Eduardo
// - - - - - - - - Generic Functions - - - - - - - -
// - - - - - - - - Generic Functions - - - - - - - -
/* É uma estratégia para quando o tipo do retorno depende do tipo do argumento

  Por exemplo, verifica o tipo de um array para retornar o tipo de dado

  É comummente utilizado com as letras T ou U para definir o tipo do generic */
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 4, "5"])); // 1
console.log(firstElement(["6", 4])); // 6
console.log(firstElement([true, false])); // true
// console.log(firstElement('teste')) => Argument of type string...
// 2 Generics
function mergeObj(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var newObj = mergeObj({ name: "Eduardo" }, { age: 18 });
console.log(newObj);
// - - - - - - - - Constraints nas Generics Functions - - - - - - - -
// - - - - - - - - Constraints nas Generics Functions - - - - - - - -
/* As generics podem ter seu escopo reduzido utilizando constraints,
    com isso, limitamos a quantidade de tipos que podem ser usados.
    
  No TS, quanto mais restrito, melhor                             */
// Restringe que o generic pode ser apenas number ou string
function biggestNumber(a, b) {
    var biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(3, 5)); //5
console.log(biggestNumber("3", "2")); // 3
// console.log(biggestNumber(true, false)) ERRO
// console.log("12", 6); // 12 6
// - - - - - - - - Definindo tipos de parâmetros - - - - - - - -
// - - - - - - - - Definindo tipos de parâmetros - - - - - - - -
/* Caso não utilizemos tipos iguais em parâmetros, receberemos um erro do TS
        Entretanto, há a possibilidade de determniar o tipo de parametros aceitos tambem
    
    Isso faz com que o TS aceite os tipos escolhidos 				*/
// Dessa maneira, caso o primeiro parametro seja Numerico, o segundo também terá que ser
function mergeArr(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArr([1, 2, 3], [4, 5, 6])); // [ 1, 2, 3, 4, 5, 6 ]
// Para aceitar tipos distintos, basta fazer o seguinte:
console.log(mergeArr([1, 2, 3], ["teste", "testando"])); // [ 1, 2, 3, 'teste', 'testando' ]
// - - - - - - - - Parâmetros Opcionais - - - - - - - -
// - - - - - - - - Parâmetros Opcionais - - - - - - - -
// É necessário que fique isolado ao fim da lista dos parametros
function modernGreeting(name, greet) {
    if (greet) {
        return console.log("Ol\u00E1, ".concat(greet, " ").concat(name, "!"));
    }
    return console.log("Ol\u00E1, ".concat(name, "!"));
}
modernGreeting("Eduardo", "Sr"); // Olá, Sr Eduardo!
modernGreeting("Eduardo"); // Olá, Eduardo!;
// - - - - - - - - Parâmetros Default - - - - - - - -
// - - - - - - - - Parâmetros Default - - - - - - - -
// Caso o parãmetro não venha da função, terá um valor default por padrão
function somaDefault(n1, n2) {
    if (n2 === void 0) { n2 = 10; }
    return n1 + n2;
}
console.log(somaDefault(5)); // 5 + 10 = 15
console.log(somaDefault(5, 5)); // 5 + 5 = 10
// - - - - - - - - Unknown Type - - - - - - - -
// - - - - - - - - Unknown Type - - - - - - - -
// É utilizado semelhante ao Any, aceita diversos tipos de dados
// A diferença é que o Unknown não permite que algo seja executado sem
// 	ter uma validação do tipo antes
function doSomething(x) {
    // console.log(x[0]); -> ERRO
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    if (typeof x === "number") {
        console.log(x + x);
    }
    if (typeof x === "boolean") {
        console.log("X is ".concat(x));
    }
}
doSomething([2, 4, 5]); // 2
doSomething(4); // 8
doSomething(true); // X is true
// - - - - - - - - Type Never - - - - - - - -
// - - - - - - - - Type Never - - - - - - - -
// O tipo Never é utilizado quando não terá retorno de dados
//	é semelhante ao Void, por exemplo
function showErrorMessage(msg) {
    // Nesse caso, será pausada a execução do código porém
    //	não há retorno de dado algum
    throw new Error(msg);
}
// showErrorMessage("Erro!!!");
/*
c:\Github\js\Curso Typescript\04. Funções\script.ts:174
throw new Error(msg);
    ^
Error: Erro!!!
at showErrorMessage (c:\Github\js\Curso Typescript\04. Funções\script.ts:174:8) */
// - - - - - - - - Rest Parameters - - - - - - - -
// - - - - - - - - Rest Parameters - - - - - - - -
// Com o ES6, é possível utilizarmos os Rest Operators
// Para aplicá-lo no TS, basta declarar o dado com a sintaxe do rest
function sumAll() {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    return n.reduce(function (number, sum) { return sum + number; });
}
console.log(sumAll(1, 1, 1, 1)); // 4
// console.log(sumAll("teste")); => ERRO
// - - - - - - - - Destructuring - - - - - - - -
// - - - - - - - - Destructuring - - - - - - - -
// Esse é um conceito do ES6, onde é possível coletar dados distintos
//	de um objeto. No TS, é possível declarar o tipo de cada um dos dados coletados
function showProductDetails(_a) {
    var name = _a.name, price = _a.price;
    return "O produto ".concat(name, " custa R$ ").concat(price);
}
var shirt = { name: "Camisa", price: 49.99 };
console.log(showProductDetails(shirt)); // O produto Camisa custa R$ 49.99
// console.log(showProductDetails({name: 'teste', age: 39})) => ERRO
