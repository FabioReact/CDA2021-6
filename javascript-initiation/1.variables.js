// Variables Javascript
// Typé dynamiquement et faiblement typé

var firstname = "Fabio"; // String - chaine de caractères - Double quote "" - Single '' - Back quote ``
var isAwake = true; // Boolean
var screenNumber = 2; // Number
var pi = 3.14; // Number
// var était utilisé jusqu`à 2015 pour déclarer un nouvelle variable, depuis ES2015 (ES6), on peut maintenant utiliser deux nouveaux mots clé pour déclarer des variables: let et const


// ***************** Types primitifs / scalaires *****************
// String, number, boolean, undefined, null
let notDefined; // Cette variable sera undefined (non définie)
let isNull = null;

// La fonction typeof me permet d'avoir le type de la variable passée en argument
// console.log me permet d'afficher dans la console javascript
console.log(typeof(notDefined));
console.log(typeof(isNull));


// ***************** Types Reference *****************
// Array - tableaux
// Vous pouvez stocker ce que vous voulez dans un tableau: string, number, boolean, function, objects, array
let fruits = ["pomme", "cerise", "mangue"]; // 2AE8B3
console.log(fruits);

// Object
let me = {
	firstname: "Fabio",
	lastname: "Ginja",
	age: 32,
	spokenLanguage: ["Français", "Anglais"],
};
console.log(me);

// Function
let test = function() {
	console.log("Ceci est une fonction anonyme stockée dans la variable test");
}

let fruitsCopy = fruits; // 2AE8B3
fruitsCopy[1] = "banane";
console.log(fruits); // 2AE8B3

// Solution 1: ["pomme", "cerise", "mangue"] 6
// Solution 2: ["pomme", "banane", "mangue"] 3
// Conclusion, on ne copie un tableau ni un objet comment ceci:
// let tableauCopie = tableauOriginal ❌❌❌💩
// En faisant ceci, on ne copierai QUE l'adresse mémoire de ce dernier, les deux variables feraient alors référence au MÊME tableau.

// ***************** let *****************
// Depuis ES6, on n'utilise plus le mot clé "var" mais "let"

// var varVariable;
if (1 + 1 === 2) {
	let letVariable = "letVariable";
	// Hoisting: Remontée de variable
	// varVariable = "varVariable";
}
// console.log(varVariable);
// console.log(letVariable);

// ***************** const *****************
// Disponible depuis ES6
const today = "mardi";
// today = "mercredi"; // ⛔️ Je ne peux pas réaffecter un variable déclarée en tant que const
const presents = ["Umair", "Corinne", "Vanak"];

presents[0] = "Anissa";
// presents = 0;
console.log(presents);
