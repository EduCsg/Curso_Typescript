import { model, Schema } from "mongoose";

const movieSchema = new Schema(
	{
		title: { type: String },
		rating: { type: Number },
		description: { type: String },
		director: { type: String },
		stars: { type: Array },
		poster: { type: String },
	},
	{
		// data e hora de criação e atualização do registro
		timestamps: true,
	},
);

// Exporta o modelo 					Collection   Formato
export const movieModel = model("Movie", movieSchema);
