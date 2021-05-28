// A chaque fois que je cliquerai sur le bouton "Ajouter", je créer un nouveau paragraphe que j'ajoute à le section ayant l'id "first"

const firstSection = document.getElementById("first");
// const button = document.getElementsByTagName("button")[0];
const firstSectionButton = document.querySelector("#first > button");

// Ajout de l'écouteur d'évènement sur le bouton lors du click
firstSectionButton.addEventListener('click', () => {
	// Je dois créer un nouveau paragraphe et l'ajouter à ma section

	// Le méthode createElement permet de créer une nouvelle balise html en passant le nom de la balise en argument
	// Documentation: https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
	const newParagraphe = document.createElement('p'); // <p></p>

	// La méthode createTextNode me permet de créer un nouveau noeud de texte
	// Documentation: https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode
	const textNode = document.createTextNode('Nouveau paragraphe'); // "Nouveau paragraphe"

	// La méthode append me permet d'insérer à l'intérieur de mon élement ce que j'aurais passé en argument
	// Documentation: https://developer.mozilla.org/en-US/docs/Web/API/Element/append
	newParagraphe.append(textNode); // <p>Nouveau paragraphe</p>

	// Enfin, j'insère mon nouveau paragraphe dans ma section
	firstSection.append(newParagraphe);
});

const secondSection = document.getElementById("second")
const secondSectionButton = document.querySelector("#second > button");
const nameInput = document.getElementById("product-name");
const imageInput = document.getElementById("product-url");
const descriptionInput = document.getElementById("product-description");

secondSectionButton.addEventListener('click', () => {
	console.log(nameInput.value)
	console.log(imageInput.value)
	console.log(descriptionInput.value)
	const article = document.createElement('article');
	const div = document.createElement('div');
	const img = document.createElement('img');
	const span = document.createElement('span');
	const p = document.createElement('p');

	// img.setAttribute('src', 'https://www.techadvisor.com/cmsdata/slideshow/3677861/best_smartphone_jan_2021_hero_thumb1200_4-3.jpg');
	// img.setAttribute('alt', 'telephone');
	img.setAttribute('src', imageInput.value);
	img.setAttribute('alt', nameInput.value);
	div.append(img);

	// const spanText = document.createTextNode('Téléphone');
	const spanText = document.createTextNode(nameInput.value);
	span.append(spanText);

	// const pText = document.createTextNode('Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, quisquam.');
	const pText = document.createTextNode(descriptionInput.value);
	p.append(pText);

	article.append(div);
	article.append(span);
	article.append(p);

	secondSection.append(article);
});