function sommeIterative(n) {
    let s = 0;
    for (let i = 1; i <= n; i++) {
        s += i;
    }
    return s;
}

function sommeRecursive(n) {
    if (n === 0) return 0;
    return n + sommeRecursive(n - 1);
}

let sN = Number(prompt("Entrez un nombre pour la somme : "));

console.log("Somme itérative :", sommeIterative(sN));
console.log("Somme récursive :", sommeRecursive(sN));

//Analyse 
//1 - Le code itératif est plus lisible.
//2 - Le code itératif est plus performant (moins de mémoire).
//3 - La récursion peut causer un stack overflow si n est trop grand.
//4 - On privilégie les boucles pour les grandes valeurs et les calculs simples.