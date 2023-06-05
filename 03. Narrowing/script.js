/* Narrowing

  Narrowing é o nome dado para o recurso do TS que identifica o tipo de dado
    de uma variável, mesmo que não tenha sido definido explicitamente.


  Dessa maneira, é possível utilizar condicionais baseado no tipo de dado recebido

  Há casos onde o tipo do dado será imprevisível e, por isso, o TS não consegue
    identificar o tipo de dado da variável, nesses casos, é necessário utilizar
    o Type Assertion para definir o tipo de dado da variável.

  Serve também para evitar mal funcionamentos/bugs no código */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// - - - - - - - - Typeof Type Guard - - - - - - - -
// - - - - - - - - Typeof Type Guard - - - - - - - -
// TypeGuard é uma validação realizada fazendo o uso do Typeof
// É possível comparar o retorno do operador typeof com os tipos possíveis
// Esse é o modelo mais simples de Narrowing
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else {
        console.log("Tipos de dados inválidos");
    }
}
sum("1", "2"); // 3
sum(1, 2); // 3
sum("1", 2); // Tipos de dados inválidos
// - - - - - - - - Checando se valor existe - - - - - - - -
// - - - - - - - - Checando se valor existe - - - - - - - -
function operations(arr, operation) {
    if (operation) {
        if (operation === "sum") {
            var sum_1 = arr.reduce(function (i, total) { return i + total; });
            console.log(sum_1);
        }
        else if (operation === "multiply") {
            var multiply = arr.reduce(function (i, total) { return i * total; });
            console.log(multiply);
        }
    }
    else {
        // Ao invés de dar erro no código, será enviada uma mensagem tratada ao usuário
        console.log("Operação não definida");
    }
}
operations([1, 2, 3, 4, 5]); // Operação não definida
operations([1, 2, 3, 4, 5], "sum"); // 15
operations([1, 2, 3, 4, 5], "multiply"); // 120
// - - - - - - - - Operador instanceof - - - - - - - -
// - - - - - - - - Operador instanceof - - - - - - - -
// Verifica se o objeto é uma instância de uma classe
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var SuperUser = /** @class */ (function (_super) {
    __extends(SuperUser, _super);
    function SuperUser(name) {
        return _super.call(this, name) || this;
    }
    return SuperUser;
}(User));
var user1 = new User("User1");
var supUser = new SuperUser("sup user");
console.log(user1, supUser); // User { name: 'User1' } SuperUser { name: 'sup user' }
function userGreeting(user) {
    if (user instanceof User) {
        console.log("Ol\u00E1 User ".concat(user.name));
    }
    else if (user instanceof SuperUser) {
        console.log("Ol\u00E1 Super ".concat(user.name));
    }
}
userGreeting(user1); // Olá User User1
userGreeting(supUser); // Olá Super sup user
// - - - - - - - - Operador In - - - - - - - -
// - - - - - - - - Operador In - - - - - - - -
// Verifica se a propriedade existe dentro do objeto
var Dog = /** @class */ (function () {
    function Dog(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
    return Dog;
}());
var semRaça = new Dog("Cachorro");
var comRaça = new Dog("Pastor", "Pastor Alemão");
function showDogDetails(dog) {
    if ("breed" in dog) {
        console.log("O cachorro ".concat(dog.name, " \u00E9 da ra\u00E7a ").concat(dog.breed));
    }
    else {
        console.log("O cachorro ".concat(dog.name, " n\u00E3o possui ra\u00E7a definida"));
    }
}
showDogDetails(semRaça); // O cachorro Cachorro não possui raça definida
showDogDetails(comRaça); // O cachorro Pastor é da raça Pastor Alemão
