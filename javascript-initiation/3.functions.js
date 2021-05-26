// IIFE
(function hello() {
	console.log("Hello world");
})();

function addition(a, b) {
	return (a + b);
}

console.log(addition(2, 3));

// Je stocke une référence vers une fonction anonyme dans une variable
const addition2 = function (a, b) {
	return (a + b);
}

console.log(addition2(2, 3));

// Je stocke une référence vers une fonction fléchée dans une variable
const addition3 = (a, b) => (a + b);

console.log(addition3(8, 7));

// Passage de paramètre par défaut - Si on ne passe pas d'argument lors de l'appel, alors le prenom sera égal à une chaîne de caractères vide (au lieu de undefined sans valeur par défaut).
const bonjour = (prenom = "") => {
	// if (prenom !== undefined) {
	// 	console.log("Bonjour", prenom);
	// } else {
	// 	console.log("Bonjour");
	// }
	console.log("Bonjour", prenom);
}

bonjour("Fabio");
bonjour();