// Imposto de renda
let salarioBruto = 10000;
let salarioDescontINSS = 0;
let salarioLiquido = 0;

//Descontar o valor do INSS

if (salarioBruto <= 1556.94) {
    salarioDescontINSS = salarioBruto - (salarioBruto*0.08);
    console.log('8% - Valor do salario descontado o INSS:', salarioDescontINSS);
}

else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    salarioDescontINSS = salarioBruto - (salarioBruto*0.09);
    console.log('9% - Valor do salario descontado o INSS:', salarioDescontINSS);
}

else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    salarioDescontINSS = salarioBruto - (salarioBruto*0.11);
    console.log('11% - Valor do salario descontado o INSS:', salarioDescontINSS);
}
else {
    salarioDescontINSS = salarioBruto - 570.88;
    console.log('Max - Valor do salario descontado o INSS:', salarioDescontINSS);
}

//Imposto de renda

if (salarioDescontINSS <= 1903.98) {
    salarioLiquido = salarioDescontINSS;
    console.log('Isento de IR - Valor salario liquido:', salarioLiquido);
}

else if (salarioDescontINSS >= 1903.99 && salarioDescontINSS <= 2826.65) {
    salarioLiquido = salarioDescontINSS - ((salarioDescontINSS*0.075)-142.8);
    console.log('7.5% - Valor salario liquido:', salarioLiquido);
}

else if (salarioDescontINSS >= 2826.66 && salarioDescontINSS <= 3751.05) {
    salarioLiquido = salarioDescontINSS - ((salarioDescontINSS*0.15)-354.80);
    console.log('15% - Valor salario liquido:', salarioLiquido);
}

else if (salarioDescontINSS >= 3751.06 && salarioDescontINSS <= 4664.68) {
    salarioLiquido = salarioDescontINSS - ((salarioDescontINSS*0.225)-636.13);
    console.log('22.5% - Valor salario liquido:', salarioLiquido);
}

else if (salarioDescontINSS >= 4664.69) {
    salarioLiquido = salarioDescontINSS - ((salarioDescontINSS*0.275)-869.36);
    console.log('27.5% - Valor salario liquido:', salarioLiquido);
}