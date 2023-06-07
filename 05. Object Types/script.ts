// - - - - - - - - O que são Object Types? - - - - - - - -
// - - - - - - - - O que são Object Types? - - - - - - - -'

/*
  São dados que tem como tipo objeto, por exemplo:
    - Object Literals -> var a = { nome: '' }
    - Arrays          -> var a = [1, 2, 3]
  
  É possível definir os types através de:
    - Interfaces
    - Readonly
    - tupla
    - etc                                       */

// - - - - - - - - Interfaces - - - - - - - -
// - - - - - - - - Interfaces - - - - - - - -

// Serve para definir tipos de propriedades em objetos

interface Product {
	name: string;
	price: number;
	isAvailable: boolean;
}

function showProductDetails(product: Product) {
	if (!product.isAvailable) {
		console.log(`O produto ${product.name} não está disponível!`);
	} else {
		console.log(`O produto ${product.name} custa R$ ${product.price}`);
	}
}

let Camisa: Product = {
	name: "Camisa",
	price: 500,
	isAvailable: true,
};

showProductDetails(Camisa); // O produto Camisa custa R$ 500
showProductDetails({ name: "Tenis", price: 125, isAvailable: false }); // O produto Tenis não está disponível!

// - - - - - - - - Props opcionais em Interfaces - - - - - - - -
// - - - - - - - - Props opcionais em Interfaces - - - - - - - -

// É possível também passar propriedades opcionais para interfaces

interface User {
	email: string;
	role?: string;
}

function showUserDetails(user: User) {
	console.log(`O email é ${user.email}`);

	if (user.role) {
		console.log(`O funcionário é ${user.role}`);
	}
}

const u1: User = { email: "abc" };

const u2: User = { email: "teste", role: "admin" };

showUserDetails(u1); // O email é abc
showUserDetails(u2); // O email é teste  // O funcionário é admin

// - - - - - - - - Propriedades Read-Only - - - - - - - -
// - - - - - - - - Propriedades Read-Only - - - - - - - -

// São um tipo constante, onde não é possível alterar o dado guardado
// pode ser aplicado dentro de interfaces também

interface Car {
	brand: string;
	readonly wheels: 4; // essa propriedade nunca poderá ser alterada
}

const fusca: Car = {
	brand: "VW",
	wheels: 4,
};

console.log(fusca); // { brand: 'VW', wheels: 4 }
// fusca.wheels = 5 -> ERRO

// - - - - - - - - Index Signature - - - - - - - -
// - - - - - - - - Index Signature - - - - - - - -

// É um método utilizado quando não sabemos o nome da propriedade, entretanto,
// sabemos quais os tipos de um obj/array

// Só serve para tipos que não devem ser utilizados

interface CoordObj {
	// O nome da prop será String e o dado dentro dela, Number
	[index: string]: number;
}

let coords: CoordObj = {
	x: 10,
	y: 50,
};

console.log(coords); // { x: 10, y: 50 }
// coords.z = 'teste' ERRO, pois é uma string e não number

// - - - - - - - - Extending Types - - - - - - - -
// - - - - - - - - Extending Types - - - - - - - -

// É uma herança de interfaces, permite que sejam criados tipos mais complexos
// ou seja, uma interface pode herdar propriedades de outra

interface Human {
	name: string;
	age: number;
}

// herda tudo da interface Human e adiciona a prop superPowers
interface SuperHuman extends Human {
	superPowers: string[];
}

const normalHuman: Human = {
	name: "Eduardo",
	age: 18,
};

const superHero: SuperHuman = {
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

// - - - - - - - - Intersection Types - - - - - - - -
// - - - - - - - - Intersection Types - - - - - - - -

// É utilizado para unir duas interfaces e criar um tipo mais complexo de dado

interface Character {
	name: string;
}

interface Gun {
	type: string;
	caliber: number;
}

// Unindo as duas interfaces
type HumanWithGun = Character & Gun;

const humanGun: HumanWithGun = {
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
let myArr: ReadonlyArray<string> = ["Maçã", "Laranja", "Banana"];

// myArr[3] = "Mamão"; => ERRO

console.log(myArr); // [ 'Maçã', 'Laranja', 'Banana', 'Mamão' ]

myArr.forEach((item) => {
	console.log(`Fruta: ${item}`);
}); /*
Fruta: Maçã
Fruta: Laranja
Fruta: Banana */

// Apesar do readOnly, é possível alterar o valor dos arrays com o método Map()
// pois ele cria uma "Cópia" do Array original
myArr = myArr.map((item) => {
	return `Fruta: ${item}`;
});

console.log(myArr); // [ 'Fruta: Maçã', 'Fruta: Laranja', 'Fruta: Banana' ]

// - - - - - - - - Tuplas - - - - - - - -
// - - - - - - - - Tuplas - - - - - - - -

// Tuplas se tratam de um array com tipo e quantidade de itens definidos
// Basicamente, geramos um novo Type

// Array terá 5 itens e todos serão numéricos
type fiveNumbers = [number, number, number, number, number];
const myNumArr: fiveNumbers = [1, 2, 3, 4, 5];
// const myNumArr2: fiveNumbers = [1, 2, 3, 4, 5, 6]; ==> ERRO

type nameAndAge = [string, number];
const user: nameAndAge = ["Eduardo", 18];
console.log(user); // [ 'Eduardo', 18 ]

user[0] = "João";
console.log(user); // [ 'João', 18 ]

// - - - - - - - - Tuplas com ReadOnly - - - - - - - -
// - - - - - - - - Tuplas com ReadOnly - - - - - - - -

function showNumbers(numbers: readonly [number, number]) {
	// numbers[0] = 10; => ERRO, pois o valor é readonly

	console.log(numbers[0]);
	console.log(numbers[1]);
}

showNumbers([1, 2]);
