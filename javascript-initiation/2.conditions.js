// Un double = vérifie l'egalité en valeur
if (5 == "5") {
	console.log("Nombre 5 == String 5");
} else {
	console.log("Nombre 5 != String 5");
}

// Un triple = vérifie l'egalité en valeur et en type
if (5 === "5") {
	console.log("Nombre 5 === String 5");
} else {
	console.log("Nombre 5 !== String 5");
}


const hungry = true;
// condition ? traitement si true : traitement si false;
hungry === true ? console.log("On va bientôt manger") : console.log("Je n'ai pas faim");

if (hungry === true)
	console.log("On va bientôt manger");
else
	console.log("Je n'ai pas faim");

// !(true || false) && true
// !true && true
// false && true
// false
