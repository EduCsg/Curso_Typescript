/*Inicialização  
  
  Para iniciar o projeto com Express e Typescript, basta rodarmos o comento "npm init -y" no terminal,
       
  A partir disso, instalamos as dependências do projeto (como os tipos, o express, etc)
  npm i @types/express @types/node ts-node-dev typescript --save-dev

  tipos do express -> @types/express
  tipos do node -> @types/node
  ts-node-dev -> para rodar o projeto em TS
  typescript -> para o TS funcionar

  Para criar o arquivo de configurações do TS, rodamos "npx tsc --init" 

  Dentro do package.json, devemos criar também um script para inicialização do projeto
  "dev": "ts-node-dev --respawn --transpile-only src/app.ts"

  Ao rodar o "npm run dev", ele executará o script em "dev" do package.json
  Ao ser salvo o arquivo, ele reinicia o servidor automaticamente

  Por fim, é criado um script para executar a aplicação!                                         */

// 2 - Utilizando o Express

// importa o express da lib
import express from "express";

// cria uma constante para o express
const app = express();

// Inicia o servidor na porta 3000
app.listen(3000, () => {
	console.log("Aplicação funcionando!");
});

// quando for feito um "GET" na rota "/" da porta 3000, ele retornará a mensagem "Olá Mundo!"
app.get("/", (req, res) => {
	return res.send("Olá Mundo!");
});

// quando for feito um "PUT" na rota "/" da porta 3000, ele retornará a mensagem "Requisição PUT"
app.put("/", (req, res) => {
	return res.send("Requisição PUT");
});

// 3 - Rota com Post

// quando for feito um "POST" na rota "/" da porta 3000, ele retornará a mensagem "Requisição POST"
app.post("/", (req, res) => {
	return res.send("Requisição POST");
});

// permite que o express entenda o formato JSON
app.use(express.json());

app.post("/api/product", (req, res) => {
	// Para enviar um dado através do Body da requisição, basta ir ao postman e na aba "Body"
	// alterar para RAW e JSON. Após isso, basta enviar um JSON com os dados que deseja enviar

	// Após fazer o post através do Postman com os dados no Body, será retornado dentro do console
	// os dados passados por JSON
	console.log(req.body);

	// return res.send(req.body.price.toString());
	// retornará o preço do produto passado no body da requisição
	console.log(
		`Produto: ${req.body.name} - Preço: ${req.body.price} - Disponível em estoque: ${req.body.inStock}`,
	);

	return res.send(
		`Produto: ${req.body.name} Adicionado! - Preço: ${req.body.price}, Em estoque: ${req.body.inStock}`,
	);
});

// 4 - Rota para quaisquer verbos (GET, POST, PUT, DELETE, etc)

// quando for feito um "GET" na rota "/testAll" da porta 3000, ele retornará a mensagem "Requisição GET"
app.all("/testAll", (req, res) => {
	// Para testar, basta ir no Postman e fazer uma requisição para a rota "/testAll"

	// Se for feito um GET, ele retornará "Requisição GET"
	if (req.method == "POST") {
		return res.send("Requisição POST");

		// Se for feito um POST, ele retornará "Requisição POST"
	} else if (req.method == "GET") {
		return res.send("Requisição GET");

		// Se for feito qualquer outro tipo de requisição, ele retornará "Requisição inválida!"
	} else {
		res.send("Requisição inválida!");
	}
});

// 5 - Interfaces com Express

// Podem ser utilizadas para definir o tipo e o formato de um objeto que será enviado
// para um request HTTP

import { Request, Response } from "express";

// Ao utilizar os tipos Request e Response, o Typescript já entende que o objeto req
// é do tipo Request e o objeto res é do tipo Response
// com isso, ele ajudará a identificar erros de digitação, etc
app.get("/api/interfaces", (req: Request, res: Response) => {
	// return req.send("Interfaces com Express"); // Propriedade "send" não existe no tipo "Request"
	return res.send("Interfaces com Express");
});

// 6 - Enviando JSON através das requests

// Para isso, basta utilizar o método JSON de response junto ao express

app.get("/api/json", (req: Request, res: Response) => {
	// No frontend, será necessário utilizar o método "json()" para converter o JSON em um objeto
	// que possa ser utilizado
	return res.json({
		name: "JSON com Express",
		price: 30.0,
		color: "blue",
		sizes: ["P", "M", "G"],
	});

	// No frontend, chegará da seguinte maneira:
	// {"name":"JSON com Express","price":30,"color":"blue","sizes":["P","M","G"]}

	// Para acessar os dados, basta utilizar o método "json()" do response
	// e acessar os dados normalmente

	// Exemplo de Front-End:
	// const data = await (await fetch("http://localhost:3000/api/json")).json();
	// console.log(data.name); // JSON com Express
	// console.log(data.price); // 30
	// console.log(data.color); // blue
});

// 7 - Rota com parâmetros

// Para isso, utilizaremos os req.params
// A rota deve ser dinâmica, ou seja, os parâmetros passados devem ser variáveis
// e estar no padrão ":id" (ou qualquer outro nome)

app.get("/api/params/:id", (req: Request, res: Response) => {
	console.log(req.params);

	// Caso seja feito um get na rota "/api/params/1/João", será retornado no console:
	// { id: '1', name: 'João' }

	if (req.params.id === "1") {
		const product = {
			id: 1,
			name: "Produto 1",
			price: 10.0,
		};

		return res.json(product);
	} else {
		return res.send("Produto não encontrado!");
	}

	// REQUESTS DE EXEMPLO
	// GET http://localhost:3000/api/params/1 => {"id":1,"name":"Produto 1","price":10}
	// GET http://localhost:3000/api/params/2 => Produto não encontrado!
});

// 8 - Rotas mais complexas (mais de um parâmetro)

// Para isso, basta adicionar mais parâmetros na rota

app.get(
	"/api/product/:productId/reviews/:reviewId",
	(req: Request, res: Response) => {
		const productId = req.params.productId;
		const reviewId = req.params.reviewId;

		return res.send(`Acessando a review ${reviewId} do produto ${productId}`);

		// REQUESTS DE EXEMPLO
		// GET http://localhost:3000/api/product/4/reviews/2 => Acessando a review 2 do produto 4
		// GET http://localhost:3000/api/product/1/reviews/3 => Acessando a review 3 do produto 1
	},
);

// 9 - Router Handler

// Retiramos a função anônima de uma rota e a colocamos em uma variável/função

function getUser(req: Request, res: Response) {
	const userId = req.params.userId;

	return res.send(`Acessando informações do usuário ${userId}`);
	// REQUESTS DE EXEMPLO
	// GET http://localhost:3000/api/user/1 => Acessando informações do usuário 1
}

app.get("/api/user/:userId", getUser);

// 10 - Middlewares

// É um recurso utilizado ENTRE a execução de uma rota e a resposta dela

// por exemplo, o app.use do JSON é um middleware, pois ele é executado antes de qualquer rota
// e transforma o JSON em um objeto que pode ser utilizado

// Podemos utilizar para realizar validações, como por exemplo, se o usuário está logado
// ou se o usuário tem permissão para acessar determinada rota

import { NextFunction } from "express";

// NextFunction é o tipo da função que é chamada para dar continuidade ao request da rota
function checkUser(req: Request, res: Response, next: NextFunction) {
	const userId = req.params.id;

	// O middleware será executado antes da resposta da rota

	// Caso o next() seja executado, a rota será executada normalmente
	// caso o id seja 1, a rota será executada e retornará "Acesso permitido!"
	if (userId === "1") {
		console.log("Pode seguir!");
		next();

		// caso o next() não seja executado, a rota travará e não será executada
		// ou seja, caso o id não seja 1, a rota não será executada e não retornará nada
	} else {
		console.log("Acesso negado!");
	}
}

// O middleware é colocado como segundo argumento da rota
app.get("/api/user/:id/access", checkUser, (req: Request, res: Response) => {
	return res.json({ msg: "Acesso permitido!" });

	// REQUESTS DE EXEMPLO
	// GET http://localhost:3000/api/user/1/access => CONSOLE Pode seguir!		- RETURN {"msg":"Acesso permitido!"}
	// GET http://localhost:3000/api/user/2/access => CONSOLE Acesso Negado! 	- RETURN (nenhum retorno)
});

// 11 - Middlewares em todas as rotas

// Para isso, basta adicionar o método "use" no app
// após isso, criamos uma função e atrelamos ao método
// assim, todas as rotas passarão por esse middleware

// comummente os middlewares ficam ou ao topo do código ou em pastas separadas

// Middleware para mostrar a rota atual
function showPath(req: Request, res: Response, next: NextFunction) {
	console.log(`Request received on route: ${req.path} - MIDDLEWARE`);

	next();
}

// todos os requests abaixo de app.use(showPath) passarão pelo middleware showPath
app.use(showPath);

app.get("/api/path", (req: Request, res: Response) => {
	return res.send(`Request received on route: ${req.path} - RESPONSE`);

	// REQUESTS DE EXEMPLO
	// GET http://localhost:3000/api/path
	// => CONSOLE Request received on route: /api/path - MIDDLEWARE
	// => RETURN Request received on route: /api/path - RESPONSE
});

// 12 - Request e Response com Generics

// Podemos tipar o Request e o Response para que o TypeScript entenda melhor
// o que está sendo recebido e enviado

// É também possível utilizar Interfaces para tipar o Request e o Response

app.get(
	"/api/user/:id/details/:name",
	(
		req: Request<{ id: string; name: string }>,
		res: Response<{ msg: boolean }>,
	) => {
		// o req.params é tipado como um objeto com as chaves id e name
		const userId = req.params.id;
		const userName = req.params.name;

		console.log(`Acessando ${userName} com o id ${userId}`);

		// o res.json é tipado como um objeto com a chave msg
		return res.json({ msg: true });

		// REQUESTS DE EXEMPLO
		// GET http://localhost:3000/api/user/1/details/João
		// => CONSOLE Acessando João com o id 1
		// => RETURN {"msg": true}
	},
);

// 13 - Tratamento de Erros

// Para tratar erros, utilizamos bloco de Try Catch
// dessa maneira, podemos detectar erros e retornar uma mensagem amigável
// ou, até mesmo, criar um sistema de Logs para armazenar os erros

app.get("/api/error", (req: Request, res: Response) => {
	try {
		// Lógica completa da rota
		// ex: inserir dado no banco de dados
		// caso não rode, o catch será executado

		throw new Error("Algo deu errado!");
	} catch (e: any) {
		// Uma boa prática é setar o status da resposta como 500 (erro interno do servidor)
		// para que o cliente saiba que o erro não foi causado por ele
		res.status(500);

		// o parâmetro "e" é o erro que foi lançado no try
		// o parâmetro é retornado como um objeto, dentro dele, temos a mensagem do erro
		// que pode ser acessada através do e.message (nesse caso, "Algo deu errado!")
		res.json({ msg: e.message });

		// ou podemos fazer os dois em uma linha só
		// res.status(500).json({ msg: e.message });
	}

	// REQUESTS DE EXEMPLO
	// GET http://localhost:3000/api/error
	// => RETURN {"msg": "Algo deu errado!"}
});
