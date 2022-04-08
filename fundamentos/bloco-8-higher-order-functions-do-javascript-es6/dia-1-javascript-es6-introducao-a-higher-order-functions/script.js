// Exercicio 1
const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const createData = (nomeCompleto) => {
  email = `${nomeCompleto.replace(' ', '_').toLowerCase()}@trybe.com`
  const obj = {
    nomeCompleto,
    email,
  };
  return obj;
};

// Exercicio 2

const sorteio = (number, verificaSorteio) => {
  const numbSorteado = Math.floor(Math.random()*(6 - 1) + 1);
  const resultado = verificaSorteio(number, numbSorteado);
  return resultado;
}

const verificaSorteio = (n1, n2) => {
  if (n1 === n2){
    return 'Parabéns você ganhou!';
  }
  return 'Tente novamente!';
}

// Exercicio 3

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const corrigeProva = (gabarito, respAluno, correção) => {
  return `Nota final: ${correção(gabarito, respAluno)}`;
}

const correção = (gabarito, respAluno) => {
  let nota = 0;
  for(let i = 0; i < gabarito.length; i += 1) {
    if (gabarito[i] === respAluno[i]) nota += 1;
    else if  (respAluno[i] === 'N.A') nota = nota;
    else if (gabarito[i] !== respAluno[i]) nota -= 0.5;
  }
  return nota;
};

// Exercicio Bônus

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => {
  const damage = Math.floor(Math.random()*((dragon.strength + 1) - 15) + 15);
  return damage;
}

const warriorDamage = () => {
  const damage = Math.floor(Math.random()*(((warrior.strength * warrior.weaponDmg) + 1)  - warrior.strength) + warrior.strength);
  return damage;
}

const mageDamage = () => {
  if (mage.mana < 15) {
    return 'Not enough mana!';
  }
  const usedMana = mage.mana -= 15;
  const damage = {
    dano: Math.floor(Math.random()*(((mage.intelligence * 2) + 1) - mage.intelligence) + mage.intelligence),
    mana: usedMana,
  }
  return damage;
}

const gameActions = {
  // Crie as HOFs neste objeto.
  warTurn: warriorTurn = (warriorDamage) =>{
    const danoTurno = warriorDamage();
    warrior.damage = danoTurno;
    dragon.healthPoints -= danoTurno;
    return 'Turno Warrior finalizado!';
  },
  magTurn: mageTurn = (mageDamage) => {
    const turno = mageDamage();
    mage.damage = turno.dano;
    dragon.healthPoints -= turno.dano;
    mage.mana = turno.mana;
    return 'Turno Mage finalizado!';
  },
  dragTurn: dragonTurn = (dragonDamage) => {
    const danoTurno = dragonDamage();
    dragon.damage = danoTurno;
    mage.healthPoints -= danoTurno;
    warrior.healthPoints -= danoTurno;
    return 'Turno Dragon finalizado!';
  },
  turn: turnoFinalizado = (battleMembers, mago, warr, drag) => {
    gameActions.magTurn(mago);
    gameActions.warTurn(warr);
    gameActions.dragTurn(drag);
    return battleMembers;
  }
};
console.log(gameActions.turn(battleMembers, mageDamage, warriorDamage, dragonDamage));




