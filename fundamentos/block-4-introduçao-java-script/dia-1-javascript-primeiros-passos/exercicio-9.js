let array25 = [];
let dividaPor2 = [];
let num = 0;

for (count = 0; count < 25; count += 1){
    num += 1;
    array25[count] = num;
}
console.log('Array formada:', array25);

for (count1 = 0; count1 < array25.length-1; count1+=1){
    dividaPor2[count1] = (array25[count1])/2;
}

console.log('Array divida por 2:', dividaPor2);

