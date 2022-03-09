//Retorna o maior número primo 

let numero = 20;
let biggestNumber = 0;

for (let index = 2; index <= numero; index++){ //loop para percorrer de 0 à 50, exclui o 0 e 1 pois n sao primos
    for(let aux = 1; aux <= index; aux++){ //loop para fazer todas as divisoes de 1 até n
        if (index%aux === 0 && index%index === 0){
            biggestNumber = index;
        }
    }
}
console.log(biggestNumber);