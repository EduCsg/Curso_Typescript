import { Request, Response } from "express";

// Model
import { movieModel } from "../Models/Movie";

// Logger
import Logger from "../../config/logger";

export async function createMovie(req: Request, res: Response) {
	try {
		// throw new Error("Teste de erro");

		// Pega os dados da requisição
		const data = req.body;

		// Cria o filme no modelo do schema movieModel
		const movie = await movieModel.create(data);

		Logger.info(`Filme ${movie.title} criado com sucesso!`);

		// Retorna o filme criado
		return res.status(201).json(movie);

		//
	} catch (err: any) {
		// Se houver algum erro, retorna o erro
		Logger.error(err.message);
	}
}

// achar um filme pelo ID
export async function getMovieById(req: Request, res: Response) {
	try {
		const id = req.params.id;

		// busca o ID no banco de dados
		const movie = await movieModel.findById(id);

		if (!movie) {
			return res.status(404).json({ error: "Filme não encontrado!" });
		}

		return res.status(200).json(movie);
	} catch (err: any) {
		if (
			err.message.includes(
				"Argument passed in must be a single String of 12 bytes or a string of 24 hex characters",
			) ||
			err.message.includes("Cast to ObjectId failed for value")
		) {
			Logger.error(`ID Inválido: ${err.message}`);
			return res.status(400).json({ error: "ID inválido!" });
		}

		Logger.error(`Erro no sistema: ${err.message}`);
		return res.status(500).json({ error: "Por favor, tente mais tarde!" });
	}
}

// achar todos os filmes
export async function getAllMovies(req: Request, res: Response) {
	try {
		// busca todos os dados que possuem o formato do schema movieModel
		const movies = await movieModel.find();

		Logger.info(`Foram encontrados ${movies.length} filmes!`);

		let names: string[] = [];

		movies.forEach((movie) => {
			names.push(movie.title!);
		});

		return res.status(200).json({
			total: movies.length,
			names: names,
			movies,
		});
	} catch (err: any) {
		Logger.error(`Erro no sistema: ${err.message}`);
		return res.status(500).json({ error: "Por favor, tente mais tarde!" });
	}
}

export async function removeMovie(req: Request, res: Response) {
	try {
		const id = req.params.id;
		const movie = await movieModel.findById(id);

		if (!movie) {
			Logger.error(`Filme não encontrado!`);
			return res.status(404).json({ error: "Filme não encontrado!" });
		}

		await movieModel.findByIdAndDelete(id);

		Logger.info(`Filme ${movie.title} deletado com sucesso!`);
		return res
			.status(200)
			.json({ message: `Filme ${movie.title} removido com sucesso!` });
	} catch (err: any) {
		if (
			err.message.includes(
				"Argument passed in must be a single String of 12 bytes or a string of 24 hex characters",
			) ||
			err.message.includes("Cast to ObjectId failed for value")
		) {
			Logger.error(`ID Inválido: ${err.message}`);
			return res.status(400).json({ error: "ID inválido!" });
		}

		Logger.error(`Erro no sistema: ${err.message}`);
		return res.status(500).json({ error: "Por favor, tente mais tarde!" });
	}
}

export async function updateMovie(req: Request, res: Response) {
	try {
		const id = req.params.id;
		const data = req.body;
		const movie = await movieModel.findById(id);

		if (!movie) {
			Logger.error(`Filme não encontrado!`);
			return res.status(404).json({ error: "Filme não encontrado!" });
		}

		// o método updateOne recebe dois parâmetros: o primeiro é o filtro, o segundo é o que será atualizado
		// o filtro é o ID do filme
		// o que será atualizado é o objeto data
		await movieModel.updateOne({ _id: id }, data);

		Logger.info(`Filme ${movie.title} atualizado com sucesso!`);

		return res.status(200).json({
			message: `Filme ${data.title} atualizado com sucesso!`,
			dados: data,
		});
	} catch (err: any) {
		if (
			err.message.includes(
				"Argument passed in must be a single String of 12 bytes or a string of 24 hex characters",
			) ||
			err.message.includes("Cast to ObjectId failed for value")
		) {
			Logger.error(`ID Inválido: ${err.message}`);
			return res.status(400).json({ error: "ID inválido!" });
		}

		Logger.error(`Erro no sistema: ${err.message}`);
		return res.status(500).json({ error: "Por favor, tente mais tarde!" });
	}
}
