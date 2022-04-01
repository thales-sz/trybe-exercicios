const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordenar = (oddsAndEvens) => {
    oddsAndEvens.sort((a,b) => a - b);
    return oddsAndEvens;
}


console.log(ordenar(oddsAndEvens)); // será necessário alterar essa linha 😉