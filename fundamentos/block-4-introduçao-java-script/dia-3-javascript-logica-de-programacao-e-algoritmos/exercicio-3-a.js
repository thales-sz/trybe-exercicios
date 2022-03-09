// Algoritmo retorna a maior palavra da array

let array = ['java', 'javascript', 'python', 'html', 'css'];
let aux = 0;

for (index = 0; index < array.length; index++) {
    if (array[index].length > array[aux].length) {
        aux = index;
    }
}
console.log(array[aux]);