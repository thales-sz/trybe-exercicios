let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersMulti = [];

    for(let count = 0; count < numbers.length; count += 1){

       if(count === numbers.length-1) {
           numbersMulti[count] = numbers[count]*2;
       }
       else {
        numbersMulti.push(numbers[count] * numbers[count+1]);
       } 

    }

console.log('Array antiga:', numbers);
console.log('Nova array:', numbersMulti);
