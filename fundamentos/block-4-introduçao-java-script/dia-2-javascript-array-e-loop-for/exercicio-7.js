let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let lowestNumber = numbers[0];

    for(let count = 0; count < numbers.length; count += 1){
        if(numbers[count] < lowestNumber){
            lowestNumber = numbers[count];
        }
    }
console.log(lowestNumber);
