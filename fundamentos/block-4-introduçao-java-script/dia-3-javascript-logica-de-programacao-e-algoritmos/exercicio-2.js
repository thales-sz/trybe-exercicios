// Algoritmo que inverte uma palavra

let word = 'Thales';
let resultado = '';
let count = word.length;

for (index = 0; index < word.length; index++) {
    resultado = resultado + word[count-1];
    count--; 
}
console.log(resultado);