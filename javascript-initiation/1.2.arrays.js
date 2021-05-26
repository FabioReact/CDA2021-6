// ****************** Manipuler les tableaux ******************
const cities = ["Tokyo", "Salvadore", "Lisbon", "Berlin", "Moscow", "Rio", "Nairobi"];

// Pour connaitre la longueur d'un tableau, je peux utiliser la propriété length
console.log(cities.length);

function copyArray(array) {
	const newArray = [];
	for (let i = 0; i < array.length; i++) {
		newArray.push(array[i]);
	}
	return newArray;
}

const citiesCopy = copyArray(cities);

// *** Spread Operator ***
// #region
// Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// Si je souhaite faire une copie (superficielle) de mon tableau, je peux aussi utiliser le spread operator
const citiesCopy2 = [ ...cities ];
console.table(citiesCopy2);
// #endregion


// Boucle For of
// Méthode find - A voir
// Méthode filter - A voir
// Méthode reduce - A voir

// *** Méthode forEach ***
// #region
// Documentation: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// La méthode forEach itère dans notre tableau, et passera à la fonction callback l'élement i du tableau. Attention, forEach ne RETOURNE RIEN
cities.forEach(function (city, index) {
	console.log("Je souhaite visiter:", city, "Index:", index);
});
// #endregion
// *** Méthode Map ***
// #region
// Documentation: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// La méthode forEach itère dans notre tableau, et passera à la fonction callback l'élement i du tableau. Map retourne un nouveau tableau de MÊME TAILLE que le tableau d'origine.
const citiesMap = cities.map(function (city, index) {
	return city + index;
});

console.table(citiesMap);

const additionsSansTVA = [56, 18, 45];

const additionsAvecTVA = additionsSansTVA.map(function(prix) {
	return prix * 1.2;
})

console.table(additionsSansTVA);
console.table(additionsAvecTVA);
// #endregion

// #region
// Exercice: Calculer le chiffre d'affaire du restaurant (dont les additions sont dans notre tableau additionsSansTVA) et stocker ce résultat dans la variable chiffreAffaire
let chiffreAffaire = 0;

function maFonction (element, index) {
	chiffreAffaire = chiffreAffaire + element;
}

additionsSansTVA.forEach(function (element, index) {
	chiffreAffaire = chiffreAffaire + element;
});

Array.prototype.myForEach = function (callback) {
	for (let i = 0; i < this.length; i++) {
		callback(this[i], i);
	}
}

additionsSansTVA.myForEach(maFonction)

console.log(chiffreAffaire);
// #endregion

// *** Méthode filter ***
// Filter me permet de retourner un sous-tableau du tableau d'origine. Chaque element qui correspond à la condition donnée sera soit gardé, soit rejeté. Elle sert donc à filtrer un tableau.

// Je créer un nouveau tableau, j'itere dans mon tableau de villes, si la ville fait plus de 5 caractères, je l'ajoute à mon tableau vide
const res = [];

cities.forEach(function (city) {
	if (city.length > 5) {
		res.push(city);
	}
});

Array.prototype.myFilter = function (callback) {
	const newArray = [];
	for (let index = 0; index < this.length; index++) {
		if (callback(this[index])) {
			newArray.push(this[index])
		}
	}
	return newArray;
};

const res2 = cities.filter(function (city) {
	return (city.length > 5);
});

console.table(res);
console.table(res2);

// *** Méthode find ***


