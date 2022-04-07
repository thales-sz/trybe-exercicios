// Exercicio 1
const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const createData = (nomeCompleto) => {
  email = `${nomeCompleto.replace(' ', '_').toLowerCase()}@trybe.com`
  const obj = {
    nomeCompleto,
    email,
  };
  return obj;
};

// Exercicio 2

const sorteio = (number, verificaSorteio) => {
  const numbSorteado = Math.floor(Math.random()*(6 - 1) + 1) ;
  const resultado = verificaSorteio(number, numbSorteado);
  return resultado;
}

const verificaSorteio = (n1, n2) => {
  if (n1 === n2){
    return 'Parabéns você ganhou!';
  }
  return 'Tente novamente!';
}
console.log(sorteio(3,verificaSorteio));