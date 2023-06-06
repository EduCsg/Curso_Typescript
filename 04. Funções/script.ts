// - - - - - - - - Void - - - - - - - -
// - - - - - - - - Void - - - - - - - -

/* Void é o tipo de função que não retorna nada dentro do Typescript
  
  Não é possível declara um return em uma função do tipo Void   */

function withoutReturn(): void {
	console.log("Função sem retorno");

	// return 'teste' => Type string is not assignable to type void
}

withoutReturn(); // Função sem retorno

// - - - - - - - - Callback como Argumento - - - - - - - -
// - - - - - - - - Callback como Argumento - - - - - - - -

/* É possível colocar uma função de Callback como argumento de outra função
  
  Além disso, podemos também definir o tipo aceito pela callback e tipo
    de retorno                                                        */

function greeting(name: string): string {
	return `Olá, ${name}`;
}

// func     nome     p  param callback - tipo return - param funcao
function preGreeting(f: (name: string) => string, userName: string) {
	console.log("Preparando a função!");

	// const greet = f(2); ERRO
	const greet = f(userName);

	console.log(greet);
}

preGreeting(greeting, "Eduardo"); // Olá, Eduardo

// - - - - - - - - Generic Functions - - - - - - - -
// - - - - - - - - Generic Functions - - - - - - - -

/* É uma estratégia para quando o tipo do retorno depende do tipo do argumento

  Por exemplo, verifica o tipo de um array para retornar o tipo de dado

  É comummente utilizado com as letras T ou U para definir o tipo do generic */

function firstElement<T>(arr: T[]): T {
	return arr[0];
}

console.log(firstElement([1, 4, "5"])); // 1
console.log(firstElement(["6", 4])); // 6
console.log(firstElement([true, false])); // true
// console.log(firstElement('teste')) => Argument of type string...

// 2 Generics
function mergeObj<T, U>(obj1: T, obj2: U) {
	return { ...obj1, ...obj2 };
}

const newObj = mergeObj({ name: "Eduardo" }, { age: 18 });
console.log(newObj);

// - - - - - - - - Constraints nas Generics Functions - - - - - - - -
// - - - - - - - - Constraints nas Generics Functions - - - - - - - -

/* As generics podem ter seu escopo reduzido utilizando constraints,
    com isso, limitamos a quantidade de tipos que podem ser usados.
    
  No TS, quanto mais restrito, melhor                             */

// Restringe que o generic pode ser apenas number ou string
function biggestNumber<T extends number | string>(a: T, b: T): T {
	let biggest: T;

	if (+a > +b) {
		biggest = a;
	} else {
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
function mergeArr<T>(arr1: T[], arr2: T[]) {
	return arr1.concat(arr2);
}

console.log(mergeArr([1, 2, 3], [4, 5, 6])); // [ 1, 2, 3, 4, 5, 6 ]

// Para aceitar tipos distintos, basta fazer o seguinte:
console.log(mergeArr<number | string>([1, 2, 3], ["teste", "testando"])); // [ 1, 2, 3, 'teste', 'testando' ]

// - - - - - - - - Parâmetros Opcionais - - - - - - - -
// - - - - - - - - Parâmetros Opcionais - - - - - - - -

// É necessário que fique isolado ao fim da lista dos parametros

function modernGreeting(name: string, greet?: string) {
	if (greet) {
		return console.log(`Olá, ${greet} ${name}!`);
	}

	return console.log(`Olá, ${name}!`);
}

modernGreeting("Eduardo", "Sr"); // Olá, Sr Eduardo!
modernGreeting("Eduardo"); // Olá, Eduardo!;

// - - - - - - - - Parâmetros Default - - - - - - - -
// - - - - - - - - Parâmetros Default - - - - - - - -

// Caso o parãmetro não venha da função, terá um valor default por padrão

function somaDefault(n1: number, n2: number = 10): number {
	return n1 + n2;
}

console.log(somaDefault(5)); // 5 + 10 = 15
console.log(somaDefault(5, 5)); // 5 + 5 = 10

// - - - - - - - - Unknown Type - - - - - - - -
// - - - - - - - - Unknown Type - - - - - - - -

// É utilizado semelhante ao Any, aceita diversos tipos de dados
// A diferença é que o Unknown não permite que algo seja executado sem
// 	ter uma validação do tipo antes

function doSomething(x: unknown) {
	// console.log(x[0]); -> ERRO

	if (Array.isArray(x)) {
		console.log(x[0]);
	}

	if (typeof x === "number") {
		console.log(x + x);
	}

	if (typeof x === "boolean") {
		console.log(`X is ${x}`);
	}
}

doSomething([2, 4, 5]); // 2
doSomething(4); // 8
doSomething(true); // X is true

// - - - - - - - - Type Never - - - - - - - -
// - - - - - - - - Type Never - - - - - - - -

// O tipo Never é utilizado quando não terá retorno de dados
//	é semelhante ao Void, por exemplo

function showErrorMessage(msg: string): never {
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

function sumAll(...n: number[]) {
	return n.reduce((number, sum) => sum + number);
}

console.log(sumAll(1, 1, 1, 1)); // 4
// console.log(sumAll("teste")); => ERRO

// - - - - - - - - Destructuring - - - - - - - -
// - - - - - - - - Destructuring - - - - - - - -

// Esse é um conceito do ES6, onde é possível coletar dados distintos
//	de um objeto. No TS, é possível declarar o tipo de cada um dos dados coletados

function showProductDetails({
	name,
	price,
}: {
	name: string;
	price: number;
}): string {
	return `O produto ${name} custa R$ ${price}`;
}

const shirt = { name: "Camisa", price: 49.99 };

console.log(showProductDetails(shirt)); // O produto Camisa custa R$ 49.99
// console.log(showProductDetails({name: 'teste', age: 39})) => ERRO
