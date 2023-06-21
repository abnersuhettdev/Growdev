import axios from "axios";

async function getUserFromGithub(user: string) {
	try {
		await axios.get(`https://api.github.com/users/${user}`).then((response) => {
			console.log(response.data);
		});
	} catch (err) {
		console.log("Usuário não existe");
	}
}

getUserFromGithub("djunior97");
getUserFromGithub("djunioriqdivqv97");

async function getRepositories(repo: string) {
	try {
		await axios.get(`https://api.github.com/repos/${repo}`).then((response) => {
			console.log(response.data);
		});
	} catch (err) {
		console.log("Repositório não existe");
	}
}

getRepositories("marcelo-growdev/scrapbook-es6");
getRepositories("marcelo-growdev/qdbqqbqwn");
