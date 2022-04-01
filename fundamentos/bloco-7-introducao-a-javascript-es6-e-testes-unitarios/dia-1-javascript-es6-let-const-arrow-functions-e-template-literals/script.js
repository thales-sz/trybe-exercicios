const fatorial = (valor) => {
  let result = 1;
  for (let i = 1; i <= valor; i += 1) {
    result *= i;
  }
  return result;
};
fatorial(4);

const longestWord = (word) => {
  let aux = word.split(" ");
  let result = "";
  let a = 0;
  let count = aux[0].length;
  for (let i = 0; i < aux.length; i += 1) {
    for (let x = 0; x < aux[i].length; x += 1) {
      if (aux[i].length >= count) {
        count = aux[i].length;
        a = i;
      }
    }
  }
  result = aux[a];
  return result;
};
console.log(
  longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")
);
