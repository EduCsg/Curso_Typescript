/* No typeScript, há a possibilidade de gerar novos tipos isso já foi
    visto anteriormente no generics e em alguns outros exercícios.
    
  Porém, existem outros operadores feitos para facilitar esse tema
    de types
    
  A ideia de utilizar os types é deixar o código mais legível, seguro,
    simples e fácil de manter.
    
  Ou seja, gastar um pouco mais de tempo na hora de estruturar os tipos
    muitas vezes evitará bugs e também facilitará a correção deles.  */
// - - - - - - - - Generics pt. 2 - - - - - - - -
// - - - - - - - - Generics pt. 2 - - - - - - - -
// Generics são utilizados quando uma função pode aceitar mais de um tipo
// é mais interessante que o any, que teria uma função parecida
function showData(arg) {
    return "O dado \u00E9 ".concat(arg);
}
console.log(showData(5)); // O dado é 5
console.log(showData("Teste")); // O dado é Teste
console.log(showData(true)); // O dado é true
// - - - - - - - - Constraints em Generics - - - - - - - -
// - - - - - - - - Constraints em Generics - - - - - - - -
// As constraints são aplicadas para que os generics aceitem apenas
// tipos permitidos de dados e não qualquer tipo (igual ao any, por exemplo)
// Aceita apenas objetos que possuem a propriedade name como string
function showProductName(obj) {
    return "O nome do produto \u00E9 ".concat(obj.name);
}
var myObj = { name: "obj1", asd: "asd", aaa: 1, bbb: 55 };
console.log(showProductName(myObj)); // O nome do produto é obj1
// const myObj2 = { name: 0 };
// console.log(showProductName(myObj2)); // Erro, pois não é string
var myObj2 = { name: "obj2" };
console.log(showProductName(myObj2)); // O nome do produto é obj2
var myCar = { name: "Ferrari", wheels: 4, engine: "V8", color: "Red" };
var myPen = {
    name: "Caneta",
    wheels: false,
    engine: false,
    color: "Blue",
};
console.log(myCar); // { name: 'Ferrari', wheels: 4, engine: 'V8', color: 'Red' }
console.log(myPen); // { name: 'Caneta', wheels: false, engine: false, color: 'Blue' }
// - - - - - - - - Type Parameters - - - - - - - -
// - - - - - - - - Type Parameters - - - - - - - -
// É usado para fazer uma ligação entre um generic e o tipo de um parametro
// dentro de um objeto
// diz que obrigatóriamente o tipo K deve ser uma chave do objeto T, ou seja
// deve existir dentro de T
function getSomeKey(objeto, key) {
    return "A chave ".concat(key.toString(), " est\u00E1 presente no objeto e vale ").concat(objeto[key]);
}
var server = {
    hd: "2tb",
    ram: "32gb",
};
console.log(getSomeKey(server, "ram")); // A chave ram está presente no objeto e vale 32gb
console.log(getSomeKey(server, "hd")); // A chave hd está presente no objeto e vale 2tb
function showCharName(obj, detail) {
    return "".concat(detail, " \u00E9 ").concat(obj[detail]);
}
var myChar = { name: "João", age: 20, hasDriverLicense: true };
console.log(showCharName(myChar, "name")); // name é João
console.log(showCharName(myChar, "age")); // age é 20
// - - - - - - - - Typeof Type Operator - - - - - - - -
// - - - - - - - - Typeof Type Operator - - - - - - - -
// É possível criar um novo tipo baseado no tipo de uma variável
var username = "Eduardo";
var username2 = "João";
console.log(typeof username2); // string
var username3 = "Maria";
function showKm(km) {
    return "O ve\u00EDculo tem ".concat(km, " km rodados");
}
var newTruck = { km: 100, kg: 1000, color: "red" };
console.log(showKm(newTruck.km)); // O veículo tem 100 km rodados
// o Type do objeto não precisa necessariamente ser o mesmo, apenas
// precisa ter a propriedade solicitada na tipagem
var newCar = { km: 200, kg: 500, color: "blue" };
console.log(showKm(newCar.km)); // O veículo tem 200 km rodados
var someVar = 5; // pois myType é true
var someVar2 = true; // pois myTypeB é false
// O tipo será "Some text here"
// const testing: CustomType = "teste"; // Erro, pois não é "Some text here"
var testing = "Some text here";
// const varTestandoUnion: a3 = "teste"; // Erro, pois não é "testando union"
var varTestandoUnion = "testando union";
