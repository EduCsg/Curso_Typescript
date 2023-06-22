// ENV Variables
require("dotenv").config();

import express from "express";
import config from "config";

// Cria o servidor express
const app = express();

// Aceita JSON como entrada
app.use(express.json());

// Realiza a conexão com o Banco de dados
import db from "../config/db";
// tenta realizar a conexão no app.listen

// importa o roteador
import router from "./router";

// importa o logger
import Logger from "../config/logger";

// Middlewares
import morganMiddleware from "./middlewares/morganMiddleware";

// ativa o middleware de log em todas as rotas
app.use(morganMiddleware);

// usa o roteador
// todas as URLs terão o prefixo /api e depois o que foi definido no router
app.use("/api", router);

// puxa a porta do arquivo de configuração
const port = config.get<number>("port");

// inicia o servidor express na porta :3000
app.listen(3000, async () => {
	// essa função é assíncrona pois há a conexão com o banco de dados!

	// conecta ao banco de dados
	await db();

	// console.log(`Aplicação rodando na porta ${port}!`);
	Logger.info(`Aplicação rodando na porta ${port}!`);
});
