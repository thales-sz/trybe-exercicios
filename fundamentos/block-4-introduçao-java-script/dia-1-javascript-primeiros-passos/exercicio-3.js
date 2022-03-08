//Retorna o maior valor entre 3 numeros;
const a = 13;
const b = 12;
const c = 15;
console.log(a, b, c);
if (a>b && a>c) {
    console.log('O maior número é', a);
}
else if (b>a && b>c) {
    console.log('O maior número é', b);
}
else {
    console.log('O maior número é', c);
}