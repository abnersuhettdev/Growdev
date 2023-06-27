import axios from "axios";

async function mostrarDadosApi() {
	const response = await axios
		.get("http://jsonplaceholder.typicode.com/users")
		.then((data) => data)
		.catch((err) => err);
	return response;
}

console.log(mostrarDadosApi());
