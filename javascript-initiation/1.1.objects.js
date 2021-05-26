// **************************** Manipuler les objects ****************************

const wanda = {
	firstname: "Wanda",
	lastname: "Maximoff",
	alias: ["Scarlet Witch", "Little Witch", "The Enhanced"],
	age: 32,
	alive: true,
	'lives-in': "USA",
}
// Si je souhaite mettre un trait d'union sur la clé d'un objet, je dois mettre ce dernier entre quotes
// Bonne pratique: toujours mettre une virgule finale au dernier élement de l'objet

// ***************** Accèder aux propriétés *****************
// console.log(wanda.firstname);
// console.log(wanda.age);
// console.log(wanda['age']);
// console.log(wanda['lives-in']);

const property = "alias";
// Que va afficher?
console.log(wanda[property]);


// ***************** Copie d'un objet *****************
// Object.assign me permet de créer un NOUVEL objet et de copier les valeurs contenues dans l'objet que je souhaite copier.
// Old school
const wandaCopy = Object.assign({}, wanda);

// Grâce à ES2018, on peut utiliser le spread operator
const betterWandaCopy = { ...wanda };
// Ce dernier va parcourir l'objet qu'on souhaite pour copier toutes ces propriétés ainsi que ces valeurs
// Attention, si vous avez des types références, vous n'allez copier que l'adresse mémoir de ces derniers (shallow copy - copie superficielle)
const deepCloneWanda = {
	...wanda,
	alias: [...wanda.alias],
};

betterWandaCopy.firstname = "Natasha";
// console.log(wanda.firstname);

deepCloneWanda.alias[0] = "Franklin";
console.log(wanda);

// ***************** Optionnal Chaining *****************

// Solution avant ES2020
if (wanda.hobbies !== undefined) {
	console.log(wanda.hobbies.time);
}
// Après ES2020
console.log(wanda.hobbies?.time)
// Si wanda.hobbies n'est pas défini, alors les propriétés qui le suivent ne seront pas lues pour ne pas générer d'erreurs