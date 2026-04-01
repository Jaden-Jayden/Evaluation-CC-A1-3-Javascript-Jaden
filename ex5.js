let nombre = "";
let min = "";
let max = "";



function dansPlage(nombre, min, max) {
	if (max >= nombre) {
        return true 
    } else {
        return false
    }
}

console.log(dansPlage(5, 1, 10)); // Résultat attendu : true
console.log(dansPlage(15, 1, 10)); // Résultat attendu : false