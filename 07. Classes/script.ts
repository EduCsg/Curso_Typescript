// - - - - - - - - Campos em Classes - - - - - - - -
// - - - - - - - - Campos em Classes - - - - - - - -

class User {
	name!: string;
	age!: number;
}

const Eduardo = new User();
console.log(Eduardo); // User { name: undefined, age: undefined }

Eduardo.name = "Eduardo";
Eduardo.age = 18;
// Eduardo.job = "Developer"; ERRO, pois não existe o campo job na classe User

// - - - - - - - - Constructor - - - - - - - -
// - - - - - - - - Constructor - - - - - - - -

class NewUser {
	name;
	age;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}
}

const joao = new NewUser("João", 20);
console.log(joao); // NewUser { name: 'João', age: 20 }

// - - - - - - - - Props com Readonly - - - - - - - -
// - - - - - - - - Props com Readonly - - - - - - - -

class Car {
	name: string;

	// Wheel não poderá ser alterado
	readonly wheels: number = 4;

	constructor(name: string) {
		this.name = name;
	}
}

const Fusca = new Car("Fusca");

console.log(Fusca); // Car { name: 'Fusca', wheels: 4 }
console.log(Fusca.wheels); // 4

// - - - - - - - - Herança e Super - - - - - - - -
// - - - - - - - - Herança e Super - - - - - - - -

class Machine {
	name: string;

	constructor(name: string) {
		this.name = name;
	}
}

const trator = new Machine("Trator");

class KillerMachine extends Machine {
	guns: number;

	constructor(name: string, guns: number) {
		super(name);
		this.guns = guns;
	}
}

const destroyer = new KillerMachine("Destroyer", 10);

console.log(trator); // Machine { name: 'Trator' }
console.log(destroyer); // KillerMachine { name: 'Destroyer', guns: 10 }

// - - - - - - - - Methods - - - - - - - -
// - - - - - - - - Methods - - - - - - - -

class Dwarf {
	name: string;

	constructor(name: string) {
		this.name = name;
	}

	greeting() {
		console.log(`Olá, eu sou o ${this.name}`);
	}
}

const jimmy = new Dwarf("Jimmy");

jimmy.greeting(); // Olá, eu sou o Jimmy

// - - - - - - - - This - - - - - - - -
// - - - - - - - - This - - - - - - - -

class Truck {
	model;
	hp;

	constructor(model: string, hp: number) {
		this.model = model;
		this.hp = hp;
	}

	showDetails() {
		console.log(
			`Caminhão do modelo: ${this.model} e com ${this.hp} cavalos de potência`,
		);
	}
}

const scania = new Truck("Scania", 500);
const volvo = new Truck("Volvo", 400);

scania.showDetails(); // Caminhão do modelo: Scania e com 500 cavalos de potência
volvo.showDetails(); // Caminhão do modelo: Volvo e com 400 cavalos de potência

// - - - - - - - - Getters - - - - - - - -
// - - - - - - - - Getters - - - - - - - -

// Leem e tratam a propriedade antes de retornar

class Person {
	name: string;
	surname: string;

	constructor(name: string, surname: string) {
		this.name = name;
		this.surname = surname;
	}

	get fullName() {
		return this.name + " " + this.surname;
	}
}

const eduardo = new Person("Eduardo", "Casagrande");

console.log(eduardo.fullName); // Eduardo Casagrande

// - - - - - - - - Setters - - - - - - - -
// - - - - - - - - Setters - - - - - - - -

// Alteram a propriedade antes de atribuir

class Coords {
	x!: number;
	y!: number;

	set fillX(x: number) {
		if (x === 0) {
			return;
		}

		this.x = x;
		console.log("X foi alterado para: " + x);
	}

	set fillY(y: number) {
		if (y === 0) {
			return;
		}

		this.y = y;
		console.log("Y foi alterado para: " + y);
	}

	get getCoord() {
		return `X é ${this.x} e Y é ${this.y}`;
	}
}

const myCoords = new Coords();

// Automaticamente as linhas abaixo darão o console.log
myCoords.fillX = 15; // X foi alterado para: 15
myCoords.fillY = 50; // Y foi alterado para: 50

console.log(myCoords.getCoord); // X é 15 e Y é 50

// - - - - - - - - Herança de Interfaces - - - - - - - -
// - - - - - - - - Herança de Interfaces - - - - - - - -

interface showTitle {
	itemTitle(): string;
}

class blogPost implements showTitle {
	title: string;

	constructor(title: string) {
		this.title = title;
	}

	itemTitle() {
		return `O título do post é: ${this.title}`;
	}
}

const myPost = new blogPost("Hello World");

console.log(myPost.itemTitle()); // O título do post é: Hello World

class TestingInterface implements showTitle {
	title: string;

	constructor(title: string) {
		this.title = title;
	}

	itemTitle() {
		return `O título é: ${this.title}`;
	}
}

// - - - - - - - - Override - - - - - - - -
// - - - - - - - - Override - - - - - - - -

// Sobrescrever um método da classe pai na classe filha

class Base {
	someMethod() {
		console.log("Alguma coisa");
	}
}
class Child extends Base {}

const myObj = new Child();
myObj.someMethod(); // Alguma coisa

// substitui o método herdado da classe pai pelo método da classe filha
Child.prototype.someMethod = function () {
	console.log("Outra coisa");
};

myObj.someMethod(); // Outra coisa

// - - - - - - - - Visibilidade - - - - - - - -
// - - - - - - - - Visibilidade - - - - - - - -

// public - Pode ser acessado de qualquer lugar
// private - Só pode ser acessado dentro da classe
// protected - Apenas classes e subclasses podem acessar. Para acessar, precisamos de um método.

// public

// O public já é o padrão para visibilidade de propriedades e métodos.
// Qualquer método ou propriedade declarado como public pode ser acessado de qualquer lugar.

class C {
	public x = 10;
}
class D extends C {}

const cInstance = new C();
console.log(cInstance.x); // 10

const dInstance = new D();
console.log(dInstance.x); // 10

// Protected

// Podem ser utilizados apenas em subclasses.
// Para acessar uma propriedade, é necessário um método

class E {
	protected x = 10;

	protected protectedMethod() {
		console.log("Esse é um método protegido!");
	}
}

class F extends E {
	showX() {
		console.log(this.x);
	}

	showProtectedMethod() {
		this.protectedMethod();
	}
}

const fInstance = new F();

// Ao tentar acessar a propriedade, dará erro
// console.log(fInstance.x); // Property 'x' is protected and only accessible within class 'E' and its subclasses.

// Porém ao acessar com um método, não dará erro
fInstance.showX(); // 10

// fInstance.protectedMethod(); // ERRO, pois o método é protegido
fInstance.showProtectedMethod(); // Esse é um método protegido!

// Private

// Podem ser acessados apenas dentro da classe que foram declarados.
// Além disso, também podem ser acessadas apenas por métodos

class PrivateClass {
	private name = "Private";

	showName() {
		console.log(this.name);
	}

	private privateMethod() {
		console.log("Esse é um método privado!");
	}

	showwPrivateMethod() {
		this.privateMethod();
	}
}

const pObj = new PrivateClass();
// console.log(pObj.name); // Property 'name' is private and only accessible within class 'PrivateClass'.

pObj.showName(); // Private

// pObj.privateMethod(); // ERRO, pois o método é privado
pObj.showwPrivateMethod(); // Esse é um método privado!

class TestingPrivate extends PrivateClass {
	myMethod() {
		// this.privateMethod(); ERRO, pois o método é privado
	}
}

// - - - - - - - - Static Members - - - - - - - -
// - - - - - - - - Static Members - - - - - - - -

// Com o static, é possível acessar props dentro de uma class sem depender de um Objeto
// com a sintaxe de "const xx = new Class()", por exemplo.

// O static é comummente utilizado em classes de Helpers

class StaticMembers {
	static prop = "Teste static";

	static staticMethod() {
		console.log("Esse é um Método estático");
	}
}

console.log(StaticMembers.prop);
StaticMembers.staticMethod(); // Esse é um Método estático

// - - - - - - - - Generic Class - - - - - - - -
// - - - - - - - - Generic Class - - - - - - - -

// Generic Class é uma classe que pode ser usada com vários tipos de dados diferentes
// Para isso, é necessário usar o <T> na declaração da classe

class Item<T, U> {
	first: T;
	second: U;

	constructor(first: T, second: U) {
		this.first = first;
		this.second = second;
	}

	get typesOf() {
		return `O first é ${typeof this.first} e o second é ${typeof this.second}`;
	}
}

const newItem = new Item("Caixa", "Surpresa");
console.log(newItem); // Item { first: 'Caixa', second: 'Surpresa' }

console.log(newItem.typesOf); // O first é string e o second é string

const secondItem = new Item(true, 15);

console.log(secondItem); // Item { first: true, second: 15 }
console.log(secondItem.typesOf); // O first é boolean e o second é number

// - - - - - - - - Parameters Prop - - - - - - - -
// - - - - - - - - Parameters Prop - - - - - - - -

// É um recurso que possibilidade definir PRIVACIDADE, NOME e TIPO de propriedades dentro do construtor

class ParametersProps {
	constructor(public name: string, private qty: number, private price: number) {
		this.name = name;
		this.qty = qty;
		this.price = price;
	}

	get showDetails() {
		return `O produto ${this.name} custa ${this.price} e tem ${this.qty} em estoque`;
	}
}

const newShirt = new ParametersProps("Camiseta", 1, 19.99);

console.log(newShirt.name); // Camiseta
// console.log(newShirt.qty); // Property 'qty' is private and only accessible within class 'ParametersProps'.

// Através de métodos é possível acessar os dados denrto do objeto
console.log(newShirt.showDetails); // O produto Camiseta custa 19.99 e tem 1 em estoque

// - - - - - - - - Class Expressions - - - - - - - -
// - - - - - - - - Class Expressions - - - - - - - -

// Cria classes anônimas e vincula ela a uma variável

const classExpression = class<T> {
	name: T;

	constructor(name: T) {
		this.name = name;
	}
};

const pessoa = new classExpression("João");

console.log(pessoa.name); // João

// - - - - - - - - Abstract Class - - - - - - - -
// - - - - - - - - Abstract Class - - - - - - - -

// Serve como molde de outra classe (mesma ideia das interfaces)
// não é possível instanciar um objeto a partir de uma abstract

abstract class AbstractClass {
	// quando uma classe comum foi criada, terá obrigatoriamente que implementar os métodos showName()
	abstract showName(): void;
}

// const newObj = new AbstractClass(); // ERRO, pois não é possível instanciar um objeto a partir de uma abstract

class AbstractExample extends AbstractClass {
	name: string;

	constructor(name: string) {
		super();
		this.name = name;
	}

	showName() {
		console.log(`O nome é ${this.name}`);
	}
}

const abstractObj = new AbstractExample("João");
abstractObj.showName(); // O nome é João

// - - - - - - - - Relações entre Classes - - - - - - - -
// - - - - - - - - Relações entre Classes - - - - - - - -

// Podemso criar um objeto baseado em outra classe sem problemas
// além disso, o TS permite que classes sejam idênticas

class Dog {
	name!: string;
}

class Cat {
	name!: string;
}

// O TS não reclamará de ser o tipo Dog e uma instância de Cat, pois
// o ts valida apenas o conteúdo dentro da classe e não a classe em si
const doguinho: Dog = new Cat();
