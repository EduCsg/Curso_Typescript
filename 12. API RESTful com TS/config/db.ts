import mongoose from "mongoose";
import config from "config";
import Logger from "./logger";

async function connect() {
	// importa o link de conexão com o banco de dados
	const dbUri = config.get<string>("dbUri");

	// conecta com o banco de dados
	try {
		await mongoose.connect(dbUri);
		// console.log("Conectado ao banco de dados com sucesso!");
		Logger.info("Conectado ao banco de dados com sucesso!");

		// se não conseguir conectar ao banco de dados
	} catch (e: any) {
		// console.log("Não foi possível conectar ao banco de dados!");
		// console.log(`Erro: ${e}`);

		Logger.error("Não foi possível conectar ao banco de dados!");
		Logger.error(e.message);
	}
}

// exporta a função connect
export default connect;
