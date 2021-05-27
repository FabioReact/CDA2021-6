console.log("Message venant du fichier script.js");

// console.dir(document);

// ******************** Sélecteurs javascript ********************
// Grâce au DOM, je peux sélectionner des élement de page page HTML en javascript pour ensuite les manipuler. Pour ce faire, je peux utiliser:

// *** Sélection par ID ***
// getElementById me renvoie une la balise ayant pour id l'argument donné ou null si cet id n'est pas présent sur la page
const firstLi = document.getElementById("first-li");
// const firstLi = document.querySelector("#first-li");

// *** Sélection par className ***
// getElementsByClassName me renvoie une HTMLCollection (qui correspond à la classe passée en argument) contant entre 0 et n éléments
const secondLi = document.getElementsByClassName("list-element")[0];
// const secondLi = document.querySelector(".list-element");

// *** Sélection par tagName ***
// getElementsByClassName me renvoie une HTMLCollection (qui correspond à la balise passée en argument) contant entre 0 et n éléments
const thirdLi = document.getElementsByTagName("li")[2];

// *** Sélection par querySelector ***
// querySelector me permet de séctionner le premier élément qui correspond au sélecteur CSS passé en argument
const fourthLi = document.querySelector("li:nth-of-type(4)");

// *** Sélection par querySelectorAll ***
// querySelector me permet de séctionner TOUT les éléments qui correspondent au sélecteur CSS passé en argument - ce dernier me retournera donc une liste d'élements
const allLi = document.querySelectorAll("li");

/* Exercice
	Sur le site de Apple: https://www.apple.com/fr/
	Sélectionner avec différents sélecteurs:
		- l'élément contenant: "Acheter un bracelet Pride Edition" via son attribut href (href="/fr/shop/goto/watch/bands")
			document.querySelector("a[href='/fr/shop/goto/watch/bands']");
		- la barre de navigation (balise nav)
			document.getElementById('ac-globalnav');
		- la deuxieme section de la balise main
			document.querySelector('main section:nth-of-type(2)')
		- la troisieme élement ayant la classe "ac-gf-directory-column"
			document.getElementsByClassName('ac-gf-directory-column')[2]
*/

// ******************** Récupérer / Modifier le texte ********************

// Essayer de trouver la propriété de firtLi contenant le texte "getElementById" (il y en a plusieurs)

// innerText récupère le contenu visible par l'utilisateur - les balises html seront converties en texte
firstLi.innerText = firstLi.innerText + " <em>(modifié via le innerText)</em>";

// innerHTML récupère tout le contenu HTML (balise comprise) - les balises seront converties en html
secondLi.innerHTML = secondLi.innerHTML + "<em> (modifié via innerHTML)</em>";

// textContent récupère le texte brut (sans les balises)
thirdLi.textContent = thirdLi.textContent + " <em>(modifié via textContent)</em>";

fourthLi.outerText = fourthLi.outerText + " <em>(modifié via outerText)</em>";

// ******************** Changer le style (CSS) ********************
// Je peux attribuer du style CSS via le JS via la propriété style d'un élément

// *** Via style ***
firstLi.style.color = "blue";
firstLi.style.listStyleType = "circle";

// *** Via classList ***
// Documentation: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
// Pour ajouter une classe à la liste
secondLi.classList.add('green');
// Pour récupérer la liste des classes: element.classList
// Si je souhaite supprimer une class: element.classList.remove('nomDeLaClasse')
// Si je souhaite ajouter une class si elle est absente, et la supprimer si elle est présente, je peux utiliser: element.classList.toggle('nomDeLaClasse')

// *** Via className ***
// Je peux accéder à la liste de mes classes via la propriété element.className (le résultat ça sera une chaîne de caractères)
secondLi.className += " capitalize";
// console.log(secondLi.className, secondLi.classList);

// *** Via id ***
// Ajout de l'id test à notre troisième li
thirdLi.id = "test";

// ******************** Écoute d'un évènement JS ********************
const buttonDark = document.getElementById('btn-dark');
const buttonGreen = document.getElementById('btn-green');
const buttonPink = document.getElementById('btn-pink');

// Associer un écouteur d'évènement sur le bouton:
// Documentation: https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener
/*
addEventListener prend deux paramètres:
- le premier est l'évènement à "écouter"
- le deuxième est le fonction qui sera éxécutée lorsque l'évènement sera déclenché
*/
const body = document.getElementsByTagName('body')[0];

buttonDark.addEventListener('click', () => {
	// On sélectionne le body pour lui ajouter une classe CSS
	// Cette classe mettre la bg en noir et le texte en blanc
	body.classList.toggle('dark-mode');
	console.log("Dark mode boutton cliqué");
});

function colorGreen() {
	buttonGreen.style.backgroundColor = '#5ab552';
}

// const colorGreen = () => {
// 	buttonGreen.style.backgroundColor = '#5ab552';
// }

buttonPink.onclick = () => {
	buttonPink.style.backgroundColor = 'pink';
}

// ******************** Récupérer la valeur d'un input ********************

// Sélection de mon input
const input = document.getElementById('prenom');

input.addEventListener('keyup', () => {
	console.log(input.value);
	// document.getElementById
	// je souhaite insérer le contenu de la valeur notre input dans la span ayant l'id input-value
	const spanInputValue = document.getElementById('input-value');
	spanInputValue.textContent = input.value;
});


