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

function showData<Generic>(arg: Generic): string {
	return `O dado é ${arg}`;
}

console.log(showData(5)); // O dado é 5
console.log(showData("Teste")); // O dado é Teste
console.log(showData(true)); // O dado é true

// - - - - - - - - Constraints em Generics - - - - - - - -
// - - - - - - - - Constraints em Generics - - - - - - - -

// As constraints são aplicadas para que os generics aceitem apenas
// tipos permitidos de dados e não qualquer tipo (igual ao any, por exemplo)

// Aceita apenas objetos que possuem a propriedade name como string
function showProductName<Generic extends { name: string }>(
	obj: Generic,
): string {
	return `O nome do produto é ${obj.name}`;
}

const myObj = { name: "obj1", asd: "asd", aaa: 1, bbb: 55 };
console.log(showProductName(myObj)); // O nome do produto é obj1

// const myObj2 = { name: 0 };
// console.log(showProductName(myObj2)); // Erro, pois não é string

const myObj2 = { name: "obj2" };
console.log(showProductName(myObj2)); // O nome do produto é obj2

// - - - - - - - - Generics com Interface - - - - - - - -
// - - - - - - - - Generics com Interface - - - - - - - -

// Com interfaces, é possível criar "ESQUELETOS" de objetos
// adicionando generics, as interfaces ficam mais flexíveis

interface IMyObj<T, U, Q> {
	name: string;
	wheels: T;
	engine: U;
	color: Q;
}

type Car = IMyObj<number, string, string>;
type Pen = IMyObj<boolean, boolean, string>;

const myCar: Car = { name: "Ferrari", wheels: 4, engine: "V8", color: "Red" };
const myPen: Pen = {
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
function getSomeKey<T, K extends keyof T>(objeto: T, key: K) {
	return `A chave ${key.toString()} está presente no objeto e vale ${
		objeto[key]
	}`;
}

const server = {
	hd: "2tb",
	ram: "32gb",
};

console.log(getSomeKey(server, "ram")); // A chave ram está presente no objeto e vale 32gb
console.log(getSomeKey(server, "hd")); // A chave hd está presente no objeto e vale 2tb
// console.log(getSomeKey(server, "teste")); // Erro, pois não existe a chave teste

// - - - - - - - - Keyof type operator - - - - - - - -
// - - - - - - - - Keyof type operator - - - - - - - -

// Com o keyof type operator, é possível criar um novo tipo baseado nas chaves
// de um objeto ou array

type Character = { name: string; age: number; hasDriverLicense: boolean };

// O elemntos do tipo C devem obter uma das chaves do objeto Character
// name, age ou hasDriverLicense
type C = keyof Character; // "name" | "age" | "hasDriverLicense"

function showCharName(obj: Character, detail: C) {
	return `${detail} é ${obj[detail]}`;
}

const myChar = { name: "João", age: 20, hasDriverLicense: true };

console.log(showCharName(myChar, "name")); // name é João
console.log(showCharName(myChar, "age")); // age é 20

// - - - - - - - - Typeof Type Operator - - - - - - - -
// - - - - - - - - Typeof Type Operator - - - - - - - -

// É possível criar um novo tipo baseado no tipo de uma variável

const username: string = "Eduardo";
const username2: typeof username = "João";

console.log(typeof username2); // string

type x = typeof username;
const username3: x = "Maria";

// - - - - - - - - Indexed Access Type - - - - - - - -
// - - - - - - - - Indexed Access Type - - - - - - - -

// Pode criar um tipo baseado em um index de um objeto
// com isso, é possível criar um tipo que pode ser qualquer tipo

type Truck = { km: number; kg: number; color: string };

type km = Truck["km"]; // number

function showKm(km: km) {
	return `O veículo tem ${km} km rodados`;
}

const newTruck: Truck = { km: 100, kg: 1000, color: "red" };
console.log(showKm(newTruck.km)); // O veículo tem 100 km rodados

// o Type do objeto não precisa necessariamente ser o mesmo, apenas
// precisa ter a propriedade solicitada na tipagem
const newCar = { km: 200, kg: 500, color: "blue" };
console.log(showKm(newCar.km)); // O veículo tem 200 km rodados

// - - - - - - - - Conditional Types - - - - - - - -
// - - - - - - - - Conditional Types - - - - - - - -

// Cria um tipo a partir do resultado de um if/else

interface A {}
interface B extends A {}

type myType = B extends A ? number : string;

const someVar: myType = 5; // pois myType é true

interface Teste {
	showName(): string;
}

type myTypeB = Teste extends { showNumber(): number } ? string : boolean;
const someVar2: myTypeB = true; // pois myTypeB é false

// - - - - - - - - Template Literals Type - - - - - - - -
// - - - - - - - - Template Literals Type - - - - - - - -

// É possível criar tipos com os Template Literals

type testeA = "text";

type CustomType = `Some ${testeA} here`;

// O tipo será "Some text here"
// const testing: CustomType = "teste"; // Erro, pois não é "Some text here"
const testing: CustomType = "Some text here";

type a1 = "testando";
type a2 = "union";

type a3 = `${a1} ${a2}`;

// const varTestandoUnion: a3 = "teste"; // Erro, pois não é "testando union"
const varTestandoUnion: a3 = "testando union";
