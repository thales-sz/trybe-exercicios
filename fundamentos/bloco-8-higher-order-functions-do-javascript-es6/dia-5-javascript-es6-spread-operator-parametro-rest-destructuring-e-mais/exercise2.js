// Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.

// escreva sum abaixo
const sum = (...numbers) => {
  let sum = 0;
  numbers.forEach(number => {
    sum += number;
  })
  return sum;
};

