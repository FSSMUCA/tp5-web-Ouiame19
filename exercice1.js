let x = "150";
let y = 150;
let z = true;

console.log(typeof x); // string
console.log(typeof y); // number
console.log(typeof z); // boolean
x = Number(x);
console.log(typeof x); // number
//JavaScript est un langage faiblement typé , le type d’une variable peut changer selon la valeur assignée
//On appelle cela le typage dynamique