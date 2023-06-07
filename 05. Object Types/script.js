// - - - - - - - - O que são Object Types? - - - - - - - -
// - - - - - - - - O que são Object Types? - - - - - - - -'
function showProductDetails(product) {
    if (!product.isAvailable) {
        console.log("O produto ".concat(product.name, " n\u00E3o est\u00E1 dispon\u00EDvel!"));
    }
    else {
        console.log("O produto ".concat(product.name, " custa R$ ").concat(product.price));
    }
}
var Camisa = {
    name: "Camisa",
    price: 500,
    isAvailable: true,
};
showProductDetails(Camisa); // O produto Camisa custa R$ 500
showProductDetails({ name: "Tenis", price: 125, isAvailable: false }); // O produto Tenis não está disponível!
function showUserDetails(user) {
    console.log("O email \u00E9 ".concat(user.email));
    if (user.role) {
        console.log("O funcion\u00E1rio \u00E9 ".concat(user.role));
    }
}
var u1 = { email: "abc" };
var u2 = { email: "teste", role: "admin" };
showUserDetails(u1); // O email é abc
showUserDetails(u2); // O email é teste  // O funcionário é admin
var fusca = {
    brand: "VW",
    wheels: 4,
};
console.log(fusca); // { brand: 'VW', wheels: 4 }
var coords = {
    x: 10,
    y: 50,
};
console.log(coords); // { x: 10, y: 50 }
var normalHuman = {
    name: "Eduardo",
    age: 18,
};
var superHero = {
    name: "SuperHero Name",
    age: 20,
    superPowers: ["invisibility", "super", "power"],
};
console.log(normalHuman); // { name: 'Eduardo', age: 18 }
console.log(superHero); /*
{
  name: 'SuperHero Name',
  age: 20,
  superPowers: [ 'invisibility', 'super', 'power' ]
} */
var humanGun = {
    name: "teste",
    type: "shotgun",
    caliber: 12,
};
console.log(humanGun); // { name: 'teste', type: 'shotgun', caliber: 12 }
// - - - - - - - - ReadOnly Array - - - - - - - -
// - - - - - - - - ReadOnly Array - - - - - - - -
// Se trata de um array com os dados dentro em ReadOnly, assim como
// as propriedades das interfaces vistas anteriormente
// Arr readOnly apenas com itens do tipo String
var myArr = ["Maçã", "Laranja", "Banana"];
// myArr[3] = "Mamão"; => ERRO
console.log(myArr); // [ 'Maçã', 'Laranja', 'Banana', 'Mamão' ]
myArr.forEach(function (item) {
    console.log("Fruta: ".concat(item));
}); /*
Fruta: Maçã
Fruta: Laranja
Fruta: Banana */
// Apesar do readOnly, é possível alterar o valor dos arrays com o método Map()
// pois ele cria uma "Cópia" do Array original
myArr = myArr.map(function (item) {
    return "Fruta: ".concat(item);
});
console.log(myArr); // [ 'Fruta: Maçã', 'Fruta: Laranja', 'Fruta: Banana' ]
var myNumArr = [1, 2, 3, 4, 5];
var user = ["Eduardo", 18];
console.log(user); // [ 'Eduardo', 18 ]
user[0] = "João";
console.log(user); // [ 'João', 18 ]
// - - - - - - - - Tuplas com ReadOnly - - - - - - - -
// - - - - - - - - Tuplas com ReadOnly - - - - - - - -
function showNumbers(numbers) {
    // numbers[0] = 10; => ERRO, pois o valor é readonly
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
