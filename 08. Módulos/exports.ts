// 1 - EXPORTANDO FUNÇÕES
export default function importGreet() {
	console.log("Olá, esta é uma função importada de outro arquivo.");
}

// 2 - EXPORTANDO VARIÁVEIS
// para exportar variáveis, basta utilizar a palavra "export"

export const testeExport = "Essa variável é um teste de exportar";

// 3 - MULTIPLAS EXPORTAÇÕES
// para isso, usamos export em cada um dos dados
// e todos devem ser chamados via destructuring

export const a: number = 10;
export const b: string = "Teste";

export function myFunction(): void {
	console.log("Função importada");
}

// 4 - ALIAS

export const someName: string = "Teste";

// 5 - EXPORTANDO TUDO

export const n1 = 10;
export const n2 = 20;
export const n3 = 30;

// 6 - IMPORTANDO TIPOS COM TS

export interface Human {
	name: string;
	age: number;
}
