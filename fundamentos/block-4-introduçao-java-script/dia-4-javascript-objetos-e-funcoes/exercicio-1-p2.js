//Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

let word = 'feijao';

function checkPalindrome(word){

    //let aux = word.split('');
    //let aux1 = aux.reverse();  
    //let invertedWord = aux1.join('');

    let invertedWord = word.split('').reverse().join(''); // Treco retirado de https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/#:~:text=The%20split()%20method%20splits,an%20array%20into%20a%20string.
    
    if (word === invertedWord){
        return true;
    }
    return false;

}

console.log(checkPalindrome(word));