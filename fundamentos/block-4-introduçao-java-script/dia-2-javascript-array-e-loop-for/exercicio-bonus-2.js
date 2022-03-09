let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let memo;

for (count = 1; count < numbers.length; count++) {
    for (count1 = 0; count1 < numbers.length; count1++){
        if (numbers[count] > numbers[count1]){
            memo = numbers[count];
            numbers[count] = numbers[count1];
            numbers[count1] = memo;
        }
    }
}
console.log('Array final:', numbers);
