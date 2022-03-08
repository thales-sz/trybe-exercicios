let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (count = 0; count < numbers.length; count += 1){
    soma = soma + numbers[count];
}
console.log('Média:', soma/numbers.length);
console.log(soma);