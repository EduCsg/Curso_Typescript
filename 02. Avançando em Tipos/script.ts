// - - - - - - - - Arrays - - - - - - - -
// - - - - - - - - Arrays - - - - - - - -
/*Para declarar um tipo array em TS, a sintaxe é diferente

  É possível declarar o tipo de dados que o array irá armazenar, como
    String, Number, etc.                                          */

let arrNumber: number[] = [1, 2, 3];
let arrBool: boolean[] = [true, false, true];
let arrString: string[] = ["a", "b", "c"];

// let arrNumber: Array<number> = [1, 2, 3];
// let arrString: Array<string> = ["a", "b", "c"];
// let arrBool: Array<boolean> = [true, false, true];

arrNumber.push(4); // OK
// arrNumber.push("d"); // Error

arrString.push("d"); // OK
// arrString.push(4); // Error

arrBool.push(false); // OK
// arrBool.push(4); // Error

// - - - - - - - - Any - - - - - - - -
// - - - - - - - - Any - - - - - - - -
/*O any transmite qualquer tipo de variável
  
  Deve ser evitado ao máximo possível, pois não é possível ter certeza
    do tipo de dado que está sendo recebido
  
  Casos de uso:
    - O dado é irrelevante 
    - Arrays com vários tipos de dados */

let qqr: any = 10;
qqr = "string";
qqr = true;
qqr = [1, "string", true];
qqr = { a: 1, b: "string", c: true };

// - - - - - - - - Parâmetros - - - - - - - -
// - - - - - - - - Parâmetros - - - - - - - -
/* É possível setar o tipo de cada parâmetro esperado dentro de uma função */

function soma(a: number, b: number) {
	return a + b;
}

console.log(soma(1, 2)); // 3
// console.log(soma(1, "2")); // Error

// - - - - - - - - Retorno - - - - - - - -
// - - - - - - - - Retorno - - - - - - - -
/* É possível setar o tipo de retorno de uma função */

//       nome (p: tipo  , p: tipo  ): tipoRetorno { ... }
function soma2(a: number, b: number): number {
	// return "teste"; -> Error
	return a + b; // OK
}
console.log(soma2(1, 2)); // 3

function nome(n: string, age: number): string {
	// Isso se torna possível pois o tipo de retorno foi definido como string,
	// o parâmetro "age" está sendo convertido no return
	return `O ${n} tem ${age} anos!`;
}
console.log("Eduardo", 18); // O Eduardo tem 18 anos!

// - - - - - - - - Funções Anônimas - - - - - - - -
// - - - - - - - - Funções Anônimas - - - - - - - -
/* É possível com o TypeScript setar funções anônimas, 
    sem declarar nomes para elas.
    
  Isso é útil em casos como métodos não existentes, por exemplo */

setTimeout(function () {
	const sallary: number = 1000;

	// console.log(parseFloat(sallary)); -> Argument of type 'number' is not assignable to parameter of type 'string'.
	console.log(parseFloat(sallary.toString())); // 1000
}, 2000);

// - - - - - - - - Tipos de Objetos - - - - - - - -
// - - - - - - - - Tipos de Objetos - - - - - - - -
/* Podemos também determinar os tipos para itens de objetos, 
    A sintaxe baseia em { prop: tipo, prop2: tipo, prop3: tipo }
    
  Dessa maneira, o objeto só aceitará os tipos definidos */

// É obrigatório que os dados passados para o parâmetro tenham
// NOME e TIPO iguais aos definidos na função
function passCoordinates(coord: { x: number; y: number }) {
	console.log(`X coord: ${coord.x} | Y coord: ${coord.y}`);
}

let objCoord = {
	x: 10,
	y: 20,
};

passCoordinates(objCoord); // X coord: 10 | Y coord: 20
passCoordinates({ x: 100, y: 200 }); // X coord: 100 | Y coord: 200
// passCoordinates({ x: "100", y: "200" }); // Error

const pessoaObj: { nome: string; idade: number } = {
	nome: "Eduardo",
	idade: 18,
};

// - - - - - - - - Propriedades Opcionais - - - - - - - -
// - - - - - - - - Propriedades Opcionais - - - - - - - -
/* Propriedades opcionais são utilizadas nos parâmetros ou definição
    dos tipos de dados contidos dentro de um objeto, função, etc
    
  Para adicionar um opcional, basta adicionar uma ? na prop */

function showNumbers(a: number, b: number, c?: number) {
	// console.log("A:" + a, "B:" + b, "C:" + c);

	c
		? console.log("A:" + a, "B:" + b, "C:" + c)
		: console.log("A:" + a, "B:" + b);
}

showNumbers(1, 2, 3); // A:1 B:2 C:3
showNumbers(1, 2); // A:1 B:2
// showNumbers(1) // Error

// - - - - - - - - Validação de Props Opcionais - - - - - - - -
// - - - - - - - - Validação de Props Opcionais - - - - - - - -
/* Isso serve para caso a Prop não seja passada, não gere um erro ou retorne
    um Undefined no código. */

// PS: Os argumentos opcionais devem estar a frente dos obrigatórios

// function advancedGreeting(firstName?: string, lastName: string) { => ERRO
function advancedGreeting(firstName: string, lastName?: string) {
	if (lastName !== undefined) {
		return `Olá, ${firstName} ${lastName}!`;
	}

	return `Olá, ${firstName}!`;
}

console.log(advancedGreeting("Eduardo")); // Olá, Eduardo!
console.log(advancedGreeting("Eduardo", "Casagrande")); // Olá, Eduardo Casagrande!

// - - - - - - - - Union Types - - - - - - - -
// - - - - - - - - Union Types - - - - - - - -
/* Union Types são uma alternativa melhor do que o Any, pois
		aceita múltiplos tipos de dados */

function unionType(a: number | string) {
	console.log(a);
}

unionType(1); // 1
unionType("1"); // 1
// unionType(false) => ERRO

const arrUnion: (number | string | boolean)[] = [1, "1", true];

// Também é possível utilizar condicionais baseado no tipo de dado recebido

function showUserRule(role: boolean | string) {
	if (typeof role === "boolean") {
		return "Usuário boolean";
	}

	return "Usuário string";
}

console.log(showUserRule(false)); // Usuário boolean
console.log(showUserRule("true")); // Usuário string

// - - - - - - - - Alias - - - - - - - -
// - - - - - - - - Alias - - - - - - - -
/* Alias são uma forma de criar um tipo de dado personalizado */

/* Maneira antiga:
function showId() {
	console.log(`O ID é ${id}`);
} */

// Maneira nova:
type ID = string | number;

function showId(id: ID /* id: string | number */) {
	console.log(`O ID é ${id}`);
}

showId(1); // O ID é 1
showId("1"); // O ID é 1

// - - - - - - - - Interfaces - - - - - - - -
// - - - - - - - - Interfaces - - - - - - - -
/* Interfaces é uma nova maneira de nomear um tipo de objeto,
		é semelhante ao Type Alias, porém mais utilizado.
		
	Além disso, podemos também definir o tipo de propriedades */

// Por boa prática, o nome começa com "I"
interface INumbers {
	x: number;
	y: number;
	z: number;
}

const numObj = {
	x: 1,
	y: 2,
	z: 3,
};

function showNumbers2(
	/* obj: { x: number; y: number; z: number } */
	obj: INumbers,
) {
	console.log(`X: ${obj.x} | Y: ${obj.y} | Z: ${obj.z}`);
}

showNumbers2(numObj); // X: 1 | Y: 2 | Z: 3

// - - - - - - - - Alias X Interface - - - - - - - -
// - - - - - - - - Alias X Interface - - - - - - - -
/*
	Na maioria das vezes, é possível optar por qual recurso será utilizado
	
	Alias 		--> NÃO pode ser alterado durante o código 
	Interface --> PODE ser alterada durante o código	*/

interface IPerson {
	name: string;
}

// Adiciona uma nova propriedade
interface IPerson {
	age: number;
}

const somePerson: IPerson = { name: "Eduardo", age: 18 };

type personType = {
	name: string;
};

// Adiciona uma nova propriedade
// type personType = { ERRO -> Duplicate identifier 'personType'.
// 	age: number;						-> Duplicate identifier 'personType'.
// };												-> Duplicate identifier 'personType'.

// - - - - - - - - Literal Types - - - - - - - -
// - - - - - - - - Literal Types - - - - - - - -
/* Permite que sejam colocados diversos valores como tipo
		para uma propriedade */

let teste: "testando";

// teste = 1; => ERRO
teste = "testando";

function showDirection(direction: "left" | "right" | "up" | "down") {
	console.log(direction);
}

showDirection("left"); // left
// showDirection("teste"); => ERRO

// - - - - - - - - Non-Null Assertion - - - - - - - -
// - - - - - - - - Non-Null Assertion - - - - - - - -
/* O TypeScript costuma anunciar erros pois o valor de uma variável AINDA não foi definido
		para evitar isso, é possível utilizar o Null Assertion Operator, que é o ! */

let canBeNull: number;

// Mesmo não recebendo nada, o TypeScript não acusa erro pois foi utilizado o !
// que diz que o valor não será nulo
console.log(canBeNull!.toString());

// - - - - - - - - BigInt - - - - - - - -
// - - - - - - - - BigInt - - - - - - - -
// Com o BigInt, é possível trabalhar com números maiores que 2^53 - 1

let maxNum: number = 9007199254740991;
let numBigInt: bigint = 90071992547409999999999999n;

// - - - - - - - - Symbol - - - - - - - -
// - - - - - - - - Symbol - - - - - - - -
/* Symbol é um tipo de dado único e imutável. Caso existam duas variáveis
com os mesmos valores, mas  sejam do tipo Symbol, serão diferentes 			*/

let symbol1 = Symbol("teste");
let symbol2 = Symbol("teste");

console.log(symbol1 == symbol2); // false
console.log(symbol1 === symbol2); // false
