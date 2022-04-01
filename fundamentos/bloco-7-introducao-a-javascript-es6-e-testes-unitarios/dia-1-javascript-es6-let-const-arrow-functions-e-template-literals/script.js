const fatorial = (valor) => {
  let result = 1;
  for(let i = 1; i <= valor; i += 1 ){
    result *= i;
  }
  return result;
}

console.log(fatorial(4));