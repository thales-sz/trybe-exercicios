let n = 10;
let aster = '*';
let linha = '';


if(n>1){
for (let index = 0; index < n; index += 1) {
  linha = linha + aster;
  console.log(linha);
}

}
else {
    console.log('Valor inválido');
}