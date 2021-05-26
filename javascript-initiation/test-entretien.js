/*
Exercice 1:
Implémentez la méthode findSmallestInterval(numbers) qui retourne le plus petit intervalle positif entre deux éléments du tableau numbers.

Par exemple si on considère le tableau [1 6 4 8 3], le plus petit intervalle est 1 (différence entre 3 et 4).

Contraintes:
	- numbers contient au moins deux éléments et au maximum 100 000 éléments
	- la solution qui privilégie la vitesse d'éxécution pour les tableaux de grandes taille obtiendra le plus de points.
	- La différence entre deux éléments ne dépassera jamais la capacité d'un entier pour votre langage.
*/
// [1 6 4 8 3]
// [1 3 4 6 8]

function findSmallestInterval(numbers) {
	const sorted = numbers.sort();
	let interval = Number.MAX_SAFE_INTEGER;
	for (let i = 1; i < sorted.length; i++) {
		if (sorted[i] - sorted[i - 1] < interval)
			interval = sorted[i] - sorted[i - 1];
	};
	return interval;
}

const resultat = findSmallestInterval([1, 3, 4, 6, 8]);

console.log(resultat);

/*
Exercice 3:
Écrivez une fonction « partition » qui prend un paramètre « liste » et un paramètre « taille » et retourne une liste de sous liste, où chaque sous liste a au maximum « taille » éléments.
Exemples d'entrées et sorties :

partition([1,2,3,4,5], 2) retourne: [ [1,2], [3,4], [5] ]
partition([1,2,3,4,5], 3) retourne: [ [1, 2, 3], [4, 5] ]
partition([1,2,3,4,5], 1) retourne: [ [1], [2], [3], [4], [5] ]
*/

function partition(liste, taille) {
	const res = [];
	for (let i = 0; i < liste.length; i = i + taille) {
		const s = liste.slice(i, i + taille);
		res.push(s);
	}
	return res;
}

console.log(partition([1, 2, 3, 4, 5], 2));
console.log(partition([1, 2, 3, 4, 5], 3));
console.log(partition([1, 2, 3, 4, 5], 1));