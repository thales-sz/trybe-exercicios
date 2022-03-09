//Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .
let n = 5;
let aster = '*';
let linha = '';


if(n>1){
for (let index = 0; index < n; index += 1) {
  linha = linha + aster;
}
for (let index1 = 0; index1 < n; index1 += 1){
    console.log(linha);
}

}
else {
    console.log('Valor inválido');
}
