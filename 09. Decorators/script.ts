// Decorators

/*  
  Decoratos servem para adicionar funcionalidades extras para classes
    e funções.

  Essas funcionalidades se baseiam em coisas aplicáveis, porém sem
    reaproveitamento entre as classes e funções.

  Basicamente, criamos novas funções através da sintaxe
    "@nomeDoDecorator"

  Essa função será chamada com o construtor da classe ou função
    como parâmetro ou quando o item que foi definido for executado

  Pra habilitar o uso de decorators, é necessário habilitar a flag
    "experimentalDecorators" no tsconfig.json */

// - - - - - - - - Primeiro Decorator - - - - - - - -
// - - - - - - - - Primeiro Decorator - - - - - - - -

// Esse será um decorator para uma function, onde terá argumentos
// especiais "target", "propertyKey" e "descriptor"

// essas propriedades nos retornam o local onde o decorator foi
// aplicado, o nome da propriedade e o descriptor da propriedade

function myDecorator() {
	console.log("Iniciando Decorator");

	return function (
		target: any,
		propertyKey: string,
		descriptor: PropertyDescriptor,
	) {
		console.log("Decorator chamado");
		console.log(target);
		console.log(propertyKey);
		console.log(descriptor);
	};
}

class myClass {
	@myDecorator()
	testing() {
		console.log("testing");
	}
}

const myObj = new myClass();

myObj.testing();
// A ordem das coisas é:
// 1. Inicia Decorator
// 2. Executa Decorator
// 3. Roda o método
// 4. Finaliza o decorator com:
// { value: [Function: testing], writable: true, enumerable: true, configurable: true }

// - - - - - - - - Múltiplos Decorators - - - - - - - -
// - - - - - - - - Múltiplos Decorators - - - - - - - -

function a() {
	return function (
		target: any,
		propertyKey: string,
		descriptor: PropertyDescriptor,
	) {
		console.log("Executou A");
	};
}

function b() {
	return function (
		target: any,
		propertyKey: string,
		descriptor: PropertyDescriptor,
	) {
		console.log("Executou B");
	};
}

function c() {
	return function (
		target: any,
		propertyKey: string,
		descriptor: PropertyDescriptor,
	) {
		console.log("Executou C");
	};
}

class MultipleDecorators {
	@a()
	@b()
	@c()
	testing() {
		console.log("Terminando execução");
	}
}

const multiple = new MultipleDecorators();

multiple.testing();

// A ordem de execução é:
// 1. Executou C
// 2. Executou B
// 3. Executou A

// - - - - - - - - Decorators de Classes - - - - - - - -
// - - - - - - - - Decorators de Classes - - - - - - - -

// O decorator de classe está ligado ao construtor da classe
// sempre que for executado (ou seja, instanciarmos um novo obj),
// o decorator será executado

class User {
	name: string;
	age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}
}

const eduardo = new User("Eduardo", 18);

console.log(eduardo); // User { name: 'Eduardo', age: 18 }

// Agora, vamos criar um decorator para a classe User

function decoratorClass(constructor: Function) {
	console.log(constructor);

	if (constructor.name === "User2") {
		console.log("É o User2");
	}
}

@decoratorClass
class User2 {
	name: string;
	age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}
}

const eduardo2 = new User2("Eduardo", 18);

console.log(eduardo2); // User2 { name: 'Eduardo', age: 18 }

// - - - - - - - - Decorators de Métodos - - - - - - - -
// - - - - - - - - Decorators de Métodos - - - - - - - -

function enumerable(value: boolean) {
	return function (
		target: any,
		propertyKey: string,
		descriptor: PropertyDescriptor,
	) {
		descriptor.enumerable = value;
	};
}

class Machine {
	name: string;

	constructor(name: string) {
		this.name = name;
	}

	// faz com que o método não seja listado
	@enumerable(false)
	showName() {
		console.log(this.name);
	}
}

const trator = new Machine("Trator");
trator.showName(); // Trator

// - - - - - - - - Accessor Decorators - - - - - - - -
// - - - - - - - - Accessor Decorators - - - - - - - -

class Monster {
	name: string;
	age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	@enumerable(true)
	get showName() {
		return `O nome é ${this.name}`;
	}

	@enumerable(false)
	get showAge() {
		return `A idade é ${this.age}`;
	}
}

const monster = new Monster("Godzilla", 1000);

console.log(monster.showName); // O nome é Godzilla
console.log(monster.showAge); // A idade é 1000

// - - - - - - - - Property Decorators - - - - - - - -
// - - - - - - - - Property Decorators - - - - - - - -

function formatNumber() {
	return function (target: Object, propertyKey: string) {
		let value: string;

		const getter = function () {
			return value;
		};

		const setter = function (newVal: string) {
			value = newVal.padStart(5, "0");
		};

		Object.defineProperty(target, propertyKey, {
			get: getter,
			set: setter,
		});
	};
}

class ID {
	@formatNumber()
	id: string;

	constructor(id: string) {
		this.id = id;
	}
}

const newItem = new ID("2");

console.log(newItem); // ID {}
console.log(newItem.id); // 2

// - - - - - - - - Class Decorators - - - - - - - -
// - - - - - - - - Class Decorators - - - - - - - -

// Nesse exemplo, exibiremos qual a data de criação do objeto

function createdDate(created: Function) {
	created.prototype.createdAt = new Date();
}

@createdDate
class Book {
	id: number;
	createdAt?: Date;

	constructor(id: number) {
		this.id = id;
	}
}

@createdDate
class Pen {
	id: number;
	createdAt?: Date;

	constructor(id: number) {
		this.id = id;
	}
}

const newBook = new Book(12);
const pen = new Pen(12);

console.log(newBook); // Book { id: 12 } - Dentro dos métodos da classe, teremos o createdAt

// - - - - - - - - Exemplo real com Method Decorators - - - - - - - -
// - - - - - - - - Exemplo real com Method Decorators - - - - - - - -

// vamos verificar se um usuário pode ou não realizar uma alteração no sistema

function checkIfUserPosted() {
	return function (
		target: any,
		propertyKey: string,
		descriptor: PropertyDescriptor,
	) {
		// Aponta para a function "Post"
		const childFunction = descriptor.value;

		// recebe todos os parametros da function "Post" em um array (content e alreadyPosted)
		descriptor.value = function (...args: any[]) {
			// verifica se o alreadyPosted é true ou false
			if (args[1] === true) {
				// se já houver postado, retorna null
				console.log("O usuário já postou!");
				return null;
			} else {
				// se não houver postado, executa a function "Post"
				return childFunction.apply(this, args);
			}
		};
	};
}

class Post {
	alreadyPosted: boolean = false;

	@checkIfUserPosted()
	post(content: string, alreadyPosted: boolean) {
		this.alreadyPosted = true;

		console.log("Post do usuário:", content);
	}
}

const newPost = new Post();

newPost.post("Olá, mundo!", newPost.alreadyPosted); // Post do usuário:  Olá, mundo!
newPost.post("Olá, mundo!", newPost.alreadyPosted); // O usuário já postou!

// - - - - - - - - Exemplo real com Property Decorators - - - - - - - -
// - - - - - - - - Exemplo real com Property Decorators - - - - - - - -

// vamos criar uma validação para número máximo de caracteres

function MaxLength(limit: number) {
	return function (target: Object, propertyKey: string) {
		let value: string;

		const getter = function () {
			return value;
		};

		const setter = function (newVal: string) {
			if (newVal.length > limit) {
				console.log(
					`O valor ${newVal} ultrapassou o limite de ${limit} caracteres!`,
				);
				return;
			} else {
				console.log(`O valor ${newVal} foi setado!`);
				value = newVal;
			}
		};

		Object.defineProperty(target, propertyKey, {
			get: getter,
			set: setter,
		});
	};
}

class Admin {
	@MaxLength(10)
	username: string;

	constructor(username: string) {
		this.username = username;
	}
}

const newAdmin = new Admin("admin"); // O valor admin foi setado!
const newAdmin2 = new Admin("admin123456789"); // O valor admin123456789 ultrapassou o limite de 10 caracteres!
