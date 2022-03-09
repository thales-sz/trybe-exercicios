// 1. Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma de 1 a 50 é: X.

let sum = 0;

for (let index = 0; index <= 50; index += 1) {
    sum += index;
}
console.log('A soma de 1 a 50 é:', sum);


//2. Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let divisores = 0;

for (let index = 2; index <= 150; index++) {
    if (index%3 === 0){
        divisores += 1;
    }
}
if (divisores === 50){
    console.log('Mensagem secreta');
}


//3. Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 

let player1 = 'papel';                              //pedra ganha de tesoura
let player2 = 'papel';                            //papel ganha da pedra
                                                    //pedra ganha da tesoura
if (player1 === 'pedra' && player2 === 'tesoura') {
    console.log('Player 1 won');
}
else if (player1 === 'tesoura' && player2 === 'papel') {
    console.log('Player 1 won');
}
else if (player1 === 'papel' && player2 === 'pedra') {
    console.log('Player 1 won');
}
else if (player1 === player2) {
    console.log('A ties');
}
else{ 
    console.log('Player 2 won');
}

//4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".

let idade = 19;

if (idade >= 18){
    console.log('A pessoa é maior de idade');
}
else{
    console.log('A pessoa é menor de idade');
}


//5. Crie um algoritmo que recebe a idade de Manu, Ana e Ronald e imprime quem é a mais nova no formato:
// "Pessoa" é a mais nova.

let idadeManu = 22;
let idadeAna = 23;
let idadeRonald = 35;
let array = [];

array.push(idadeAna, idadeManu, idadeRonald);
array.sort();

if (array[0] === idadeManu){
    console.log('Manu é a mais nova');
}

else if (array[0] === idadeRonald){
    console.log('Ronald é a mais nova');
}
else{
    console.log('Ana é a mais nova');
}
