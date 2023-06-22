import { Router, Request, Response } from "express";
import {
	createMovie,
	getAllMovies,
	getMovieById,
	removeMovie,
	updateMovie,
} from "./Controllers/movieControllers";

// Validations
import { validate } from "./middlewares/handleValidation";
import { movieCreateValidation } from "./middlewares/movieValidation";

// Cria o roteador
const router = Router();

// Exporta o roteador
// Para acessar essa rota, será necessário acessar /api/test, pois o prefixo é /api
// definido no app.ts
export default router
	.get("/test", (req: Request, res: Response) => {
		return res.status(200).send("API Working!");
	})
	.post("/movie", movieCreateValidation(), validate, createMovie)
	.get("/movie/all", getAllMovies)
	.get("/movie/:id", getMovieById)
	.delete("/movie/:id", removeMovie)
	// validações para não permitir que o usuário envie dados que não são permitidos
	// como números no lugar do nome do filme, por exemplo
	.patch("/movie/:id", movieCreateValidation(), validate, updateMovie);
