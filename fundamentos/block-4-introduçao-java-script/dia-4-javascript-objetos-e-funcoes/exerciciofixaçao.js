
let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    },
};

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

console.log('A jogadora', player.name, player.lastName, 'tem', player.age, 'anos de idade.');

console.log('A jogadora', player.name, player.lastName, 'foi eleita a melhor do mundo por', player.bestInTheWorld.length, 'vezes');

console.log('A jogador possui', player.medals.golden, 'medalhas de ouro e', player.medals.silver, 'medalhas de prata');



let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };


for (let index in names){
    console.log('Olá', names[index]);
}

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

for (let index1 in car){
    console.log(index1 +':', car[index1]);
}