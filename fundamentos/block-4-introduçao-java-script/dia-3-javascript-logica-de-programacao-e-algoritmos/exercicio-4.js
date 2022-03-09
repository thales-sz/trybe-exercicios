//Retorna o maior número primo 

let numero = 50;
let biggestNumber = [];
let count = 0;

for (index = 2; index <= numero; index++){ //loop para percorrer de 0 à 50, exclui o 0 e 1 pois n sao primos


    for(aux = 1; aux <= index; aux++){     //loop para fazer todas as divisoes de 1 até n
        
        if(index%aux === 0){
            count++
        }
    }
    if (count === 2){
        console.log('Número', index, 'é primo!')
        biggestNumber.push(index)
    }
    count = 0

}
console.log('O maior número primo é:', biggestNumber[biggestNumber.length-1]);