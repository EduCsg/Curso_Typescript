import winston from "winston";
import config from "config";

// diz o "nível" do erro
const levels = {
	error: 0,
	warn: 1,
	info: 2,
	http: 3,
	debug: 4,
};

const colors = {
	error: "red",
	warn: "yellow",
	info: "green",
	http: "magenta",
	debug: "white",
};

const level = () => {
	// seta o ambiente para o logger
	const env = config.get<string>("env") || "development";

	// verifica se o ambiente é de desenvolvimento
	const isDev = env === "development";
	return isDev ? "debug" : "warn";
};

// envia as cores para o console
winston.addColors(colors);

// formato do log
const format = winston.format.combine(
	// mostra a data e hora do log
	winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),

	// mostra o nível do log
	winston.format.colorize({ all: true }),

	// mostra a mensagem do log
	winston.format.printf(
		(info) => `${info.timestamp} - ${info.level}: ${info.message}`,
	),
);

// transfere os erros para um arquivo de log
const transports = [
	// mostra o log no console
	new winston.transports.Console(),

	// add o log em um arquivo
	new winston.transports.File({
		// logs de erro irão para o arquivo error.log
		filename: "logs/error.log",
		level: "error",
	}),

	// todos outros logs irão para o arquivo all.log
	new winston.transports.File({
		filename: "logs/all.log",
	}),
];

// cria o logger
const Logger = winston.createLogger({
	level: level(),
	levels,
	format,
	transports,
});

export default Logger;
