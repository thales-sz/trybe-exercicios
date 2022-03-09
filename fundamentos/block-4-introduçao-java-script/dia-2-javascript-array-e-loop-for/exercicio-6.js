let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numImpares = 0;

for(let count = 0; count < numbers.length; count += 1){
    if(numbers[count]%2 !== 0){
        numImpares += 1;
    }
}
if(numImpares !== 0) {
    console.log('A quantidade de numeros impares é:', numImpares);
}
else {
    console.log('Não tem numeros impares');
}
