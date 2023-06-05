/* Narrowing

  Narrowing é o nome dado para o recurso do TS que identifica o tipo de dado
    de uma variável, mesmo que não tenha sido definido explicitamente.


  Dessa maneira, é possível utilizar condicionais baseado no tipo de dado recebido

  Há casos onde o tipo do dado será imprevisível e, por isso, o TS não consegue
    identificar o tipo de dado da variável, nesses casos, é necessário utilizar
    o Type Assertion para definir o tipo de dado da variável.

  Serve também para evitar mal funcionamentos/bugs no código */

// - - - - - - - - Typeof Type Guard - - - - - - - -
// - - - - - - - - Typeof Type Guard - - - - - - - -
// TypeGuard é uma validação realizada fazendo o uso do Typeof
// É possível comparar o retorno do operador typeof com os tipos possíveis

// Esse é o modelo mais simples de Narrowing

function sum(a: number | string, b: number | string) {
	if (typeof a === "string" && typeof b === "string") {
		console.log(parseFloat(a) + parseFloat(b));
	} else if (typeof a === "number" && typeof b === "number") {
		console.log(a + b);
	} else {
		console.log("Tipos de dados inválidos");
	}
}

sum("1", "2"); // 3
sum(1, 2); // 3
sum("1", 2); // Tipos de dados inválidos

// - - - - - - - - Checando se valor existe - - - - - - - -
// - - - - - - - - Checando se valor existe - - - - - - - -

function operations(arr: number[], operation?: string | undefined) {
	if (operation) {
		if (operation === "sum") {
			const sum = arr.reduce((i, total) => i + total);
			console.log(sum);
		} else if (operation === "multiply") {
			const multiply = arr.reduce((i, total) => i * total);
			console.log(multiply);
		}
	} else {
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

class User {
	name;

	constructor(name: string) {
		this.name = name;
	}
}

class SuperUser extends User {
	constructor(name: string) {
		super(name);
	}
}

const user1 = new User("User1");
const supUser = new SuperUser("sup user");

console.log(user1, supUser); // User { name: 'User1' } SuperUser { name: 'sup user' }

function userGreeting(user: object) {
	if (user instanceof User) {
		console.log(`Olá User ${user.name}`);
	} else if (user instanceof SuperUser) {
		console.log(`Olá Super ${user.name}`);
	}
}

userGreeting(user1); // Olá User User1
userGreeting(supUser); // Olá Super sup user

// - - - - - - - - Operador In - - - - - - - -
// - - - - - - - - Operador In - - - - - - - -
// Verifica se a propriedade existe dentro do objeto

class Dog {
	name;
	breed?;

	constructor(name: string, breed?: string) {
		this.name = name;
		if (breed) {
			this.breed = breed;
		}
	}
}

let semRaça = new Dog("Cachorro");
let comRaça = new Dog("Pastor", "Pastor Alemão");

function showDogDetails(dog: Dog) {
	if ("breed" in dog) {
		console.log(`O cachorro ${dog.name} é da raça ${dog.breed}`);
	} else {
		console.log(`O cachorro ${dog.name} não possui raça definida`);
	}
}

showDogDetails(semRaça); // O cachorro Cachorro não possui raça definida
showDogDetails(comRaça); // O cachorro Pastor é da raça Pastor Alemão
