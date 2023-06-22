// Como se fosse o req.body
import { body } from "express-validator";

export const movieCreateValidation = () => {
	//
	// Validações
	return [
		body("title")
			// se não for string, solta a msg
			.isString()
			.withMessage("O título deve ser uma string.")
			.isLength({ min: 5 })
			.withMessage("O título deve ter no mínimo 5 caracteres."),
		body("rating")
			.isNumeric()
			.withMessage("A nota deve ser um número.")
			.custom((value: number) => {
				if (value < 0 || value > 10) {
					throw new Error("A nota deve ser um número entre 0 e 10.");
				}

				return true;
			}),
		body("description").isString().withMessage("A descrição é obrigatória."),
		body("director").isString().withMessage("O diretor é obrigatório."),
		body("poster").isURL().withMessage("A imagem deve ser uma URL válida."),
	];
};
