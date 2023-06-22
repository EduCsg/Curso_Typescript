const dbUser = process.env.VITE_DB_USER;
const dbPassword = process.env.VITE_DB_PASS;

export default {
	port: 3000,
	dbUri: `mongodb+srv://${dbUser}:${dbPassword}@cluster0.riyk54l.mongodb.net/?retryWrites=true&w=majority`,
	env: "development",
};
