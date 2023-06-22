import morgan, { StreamOptions } from "morgan";
import config from "config";

import Logger from "../../config/logger";

// padrão da mensagem de log
const stream: StreamOptions = {
	write: (message) => Logger.http(message),
};

// serve para ignorar as mensagens de log
const skip = () => {
	// seta o ambiente para o logger
	const env = config.get<string>("env") || "development";

	// verifica se o ambiente é de desenvolvimento
	return env !== "development";
};

const morganMiddleware = morgan(
	// formato do log
	":method :url :status :res[content-length] - :response-time ms",
	{ stream, skip },
);

export default morganMiddleware;
