// calcular lucro da empresa em 1000 produtos vendidos
let valorCusto = 20;
let valorVenda = 60;
let numProd = 1000;
let imposto = 0.2;
let lucro = 0;

if (valorCusto != 0 && valorVenda != 0) {

    valorVenda = valorVenda*numProd;
    valorCusto = valorCusto*numProd;
    console.log(valorCusto, valorVenda);

    valorCusto = valorCusto + valorCusto*imposto;
    console.log(valorCusto);

    lucro = valorVenda - valorCusto;
    console.log(lucro);

}
else {
    console.log('Valor invalido')
}