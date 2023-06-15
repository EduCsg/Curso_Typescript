"use strict";
// Decorators
var __decorate =
	(this && this.__decorate) ||
	function (decorators, target, key, desc) {
		var c = arguments.length,
			r =
				c < 3
					? target
					: desc === null
					? (desc = Object.getOwnPropertyDescriptor(target, key))
					: desc,
			d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
			r = Reflect.decorate(decorators, target, key, desc);
		else
			for (var i = decorators.length - 1; i >= 0; i--)
				if ((d = decorators[i]))
					r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
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
	return function (target, propertyKey, descriptor) {
		console.log("Decorator chamado");
		console.log(target);
		console.log(propertyKey);
		console.log(descriptor);
	};
}
class myClass {
	testing() {
		console.log("testing");
	}
}
__decorate([myDecorator()], myClass.prototype, "testing", null);
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
	return function (target, propertyKey, descriptor) {
		console.log("Executou A");
	};
}
function b() {
	return function (target, propertyKey, descriptor) {
		console.log("Executou B");
	};
}
function c() {
	return function (target, propertyKey, descriptor) {
		console.log("Executou C");
	};
}
class MultipleDecorators {
	testing() {
		console.log("Terminando execução");
	}
}
__decorate([a(), b(), c()], MultipleDecorators.prototype, "testing", null);
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
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}
const eduardo = new User("Eduardo", 18);
console.log(eduardo); // User { name: 'Eduardo', age: 18 }
// Agora, vamos criar um decorator para a classe User
function decoratorClass(constructor) {
	console.log(constructor);
	if (constructor.name === "User2") {
		console.log("É o User2");
	}
}
let User2 = class User2 {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
};
User2 = __decorate([decoratorClass], User2);
const eduardo2 = new User2("Eduardo", 18);
console.log(eduardo2); // User2 { name: 'Eduardo', age: 18 }
// - - - - - - - - Decorators de Métodos - - - - - - - -
// - - - - - - - - Decorators de Métodos - - - - - - - -
function enumerable(value) {
	return function (target, propertyKey, descriptor) {
		descriptor.enumerable = value;
	};
}
class Machine {
	constructor(name) {
		this.name = name;
	}
	// faz com que o método não seja listado
	showName() {
		console.log(this.name);
	}
}
__decorate([enumerable(false)], Machine.prototype, "showName", null);
const trator = new Machine("Trator");
trator.showName(); // Trator
// - - - - - - - - Accessor Decorators - - - - - - - -
// - - - - - - - - Accessor Decorators - - - - - - - -
class Monster {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	get showName() {
		return `O nome é ${this.name}`;
	}
	get showAge() {
		return `A idade é ${this.age}`;
	}
}
__decorate([enumerable(true)], Monster.prototype, "showName", null);
__decorate([enumerable(false)], Monster.prototype, "showAge", null);
const monster = new Monster("Godzilla", 1000);
console.log(monster.showName); // O nome é Godzilla
console.log(monster.showAge); // A idade é 1000
// - - - - - - - - Property Decorators - - - - - - - -
// - - - - - - - - Property Decorators - - - - - - - -
function formatNumber() {
	return function (target, propertyKey) {
		let value;
		const getter = function () {
			return value;
		};
		const setter = function (newVal) {
			value = newVal.padStart(5, "0");
		};
		Object.defineProperty(target, propertyKey, {
			get: getter,
			set: setter,
		});
	};
}
class ID {
	constructor(id) {
		this.id = id;
	}
}
__decorate([formatNumber()], ID.prototype, "id", void 0);
const newItem = new ID("2");
console.log(newItem); // ID {}
console.log(newItem.id); // 2
// - - - - - - - - Class Decorators - - - - - - - -
// - - - - - - - - Class Decorators - - - - - - - -
// Nesse exemplo, exibiremos qual a data de criação do objeto
function createdDate(created) {
	created.prototype.createdAt = new Date();
}
let Book = class Book {
	constructor(id) {
		this.id = id;
	}
};
Book = __decorate([createdDate], Book);
let Pen = class Pen {
	constructor(id) {
		this.id = id;
	}
};
Pen = __decorate([createdDate], Pen);
const newBook = new Book(12);
const pen = new Pen(12);
console.log(newBook); // Book { id: 12 } - Dentro dos métodos da classe, teremos o createdAt
// - - - - - - - - Exemplo real com Method Decorators - - - - - - - -
// - - - - - - - - Exemplo real com Method Decorators - - - - - - - -
// vamos verificar se um usuário pode ou não realizar uma alteração no sistema
function checkIfUserPosted() {
	return function (target, propertyKey, descriptor) {
		// Aponta para a function "Post"
		const childFunction = descriptor.value;
		// recebe todos os parametros da function "Post" em um array (content e alreadyPosted)
		descriptor.value = function (...args) {
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
	constructor() {
		this.alreadyPosted = false;
	}
	post(content, alreadyPosted) {
		this.alreadyPosted = true;
		console.log("Post do usuário:", content);
	}
}
__decorate([checkIfUserPosted()], Post.prototype, "post", null);
const newPost = new Post();
newPost.post("Olá, mundo!", newPost.alreadyPosted); // Post do usuário:  Olá, mundo!
newPost.post("Olá, mundo!", newPost.alreadyPosted); // O usuário já postou!
// - - - - - - - - Exemplo real com Property Decorators - - - - - - - -
// - - - - - - - - Exemplo real com Property Decorators - - - - - - - -
// vamos criar uma validação para número máximo de caracteres
function MaxLength(limit) {
	return function (target, propertyKey) {
		let value;
		const getter = function () {
			return value;
		};
		const setter = function (newVal) {
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
	constructor(username) {
		this.username = username;
	}
}
__decorate([MaxLength(10)], Admin.prototype, "username", void 0);
const newAdmin = new Admin("admin"); // O valor admin foi setado!
const newAdmin2 = new Admin("admin123456789"); // O valor admin123456789 ultrapassou o limite de 10 caracteres!
