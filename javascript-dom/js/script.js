console.log("Message venant du fichier script.js");

// console.dir(document);

// ******************** Sélecteurs javascript ********************
// Grâce au DOM, je peux sélectionner des élement de page page HTML en javascript pour ensuite les manipuler. Pour ce faire, je peux utiliser:

// *** Sélection par ID ***
// getElementById me renvoie une la balise ayant pour id l'argument donné ou null si cet id n'est pas présent sur la page
const firstLi = document.getElementById("first-li");
// const firstLi = document.querySelector("#first-li");
console.log(firstLi);

// *** Sélection par className ***
// getElementsByClassName me renvoie une HTMLCollection (qui correspond à la classe passée en argument) contant entre 0 et n éléments
const secondLi = document.getElementsByClassName("list-element")[0];
// const secondLi = document.querySelector(".list-element");
console.log(secondLi);

// *** Sélection par tagName ***
// getElementsByClassName me renvoie une HTMLCollection (qui correspond à la balise passée en argument) contant entre 0 et n éléments
const thirdLi = document.getElementsByTagName("li")[2];
console.log(thirdLi);

// *** Sélection par querySelector ***
// querySelector me permet de séctionner le premier élément qui correspond au sélecteur CSS passé en argument
const fourthLi = document.querySelector("li:nth-of-type(4)");
console.log(fourthLi);

// *** Sélection par querySelectorAll ***
// querySelector me permet de séctionner TOUT les éléments qui correspondent au sélecteur CSS passé en argument - ce dernier me retournera donc une liste d'élements
const allLi = document.querySelectorAll("li");
console.log(allLi)

/* Exercice
	Sur le site de Apple: https://www.apple.com/fr/
	Sélectionner avec différents sélecteurs:
		- l'élément contenant: "Acheter un bracelet Pride Edition" via son attribut href (href="/fr/shop/goto/watch/bands")
		- la barre de navigation (balise nav)
		- la deuxieme section de la balise main
		- la troisieme div ayanty la classe "ac-gf-directory-column"
 */