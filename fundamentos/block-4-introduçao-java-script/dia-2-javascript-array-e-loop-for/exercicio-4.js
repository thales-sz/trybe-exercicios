let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0;

for (count = 0; count < numbers.length; count += 1){
    soma = soma + numbers[count];
}
media = soma/numbers.length; 
console.log('Média:', media);

if (media > 20){
    console.log('Valor maior que 20');
}
else{
    console.log('Valor menor ou igual a 20');
}
