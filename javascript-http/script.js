// Si je veux supporter tout les navigateurs, je peux utiliser unfetch comme polyfill
// https://www.npmjs.com/package/unfetch

const buttonPicsum = document.querySelector("#list-pictures button");
const butttonRandamUser = document.querySelector("#user button");
const div = document.querySelector("#list-pictures > div");
const userDiv = document.querySelector("#user > div");

buttonPicsum.addEventListener('click', () => {
	const options = {
		method: "GET",
		"Content-Type": "application/json",
	};

	// La méthode fetch retourne une promesse
	// Sur un promesse, je peux utiliser la méthode then pour faire un traitement lorsque le résultat sera disponible
	fetch('https://picsum.photos/v2/list?page=2&limit=5', options)
		.then(response => response.json())
		.then(data => {
			console.log(data);
			data.forEach(element => {
				// Ici, je dois créer une nouvelle image et l'insérer dans ma page web
				const newImg = document.createElement('img');
				newImg.style.width = "300px";
				newImg.setAttribute("src", element.download_url);
				newImg.setAttribute("alt", element.author);
				div.append(newImg);
			});
		})
});

/* Version async/await
buttonPicsum.addEventListener('click', async () => {
	const options = {
		method: "GET",
		"Content-Type": "application/json",
	};

	const response = await fetch('https://picsum.photos/v2/list?page=2&limit=5', options);
	const data = await response.json();

	data.forEach(element => {
		const newImg = document.createElement('img');
		newImg.style.width = "300px";
		newImg.setAttribute("src", element.download_url);
		newImg.setAttribute("alt", element.author);
		div.append(newImg);
	});
});
*/


butttonRandamUser.addEventListener('click', () => {
	fetch('https://randomuser.me/api/', {method: "GET", "Content-Type": "application/json"})
		.then(response => response.json())
		.then(data => {
			const user = data.results[0];
			const newImg = document.createElement('img');
			newImg.setAttribute("src", user.picture.medium);
			newImg.setAttribute("alt", `Photo de ${user.name.first}`);
			userDiv.append(newImg);

			const newP = document.createElement('p');
			// newP.textContent = user.name.first + ' ' + user.name.last;
			newP.textContent = `${user.name.first} ${user.name.last}`; // Template string - String interpolation
			// const text = document.createTextNode(`${user.name.first} ${user.name.last}`);
			// newP.append(text);
			userDiv.append(newP);
		});
});
