let peça = 'Knig';
console.log(peça);

switch (peça.toLowerCase()) {

    case 'bishop':
        console.log('Em diagonal, quantas casas quiser');
        break;

    case 'king':
        console.log('Apenas 1 casa para qualquer direção possivel');
        break;

    case 'pawn':
        console.log('Apenas para frente');
        break;

    case 'queen':
        console.log('Em todas as direções quantas casas quiser');
        break;

    case 'rook':
        console.log('Horizontal e vertical quantas casas quiser');
        break;

    case 'knight':
        console.log('Em formato de L, 3 casas na vertical e 2 na horizontal');
        break;

    default:
        console.log('Peça inválida');

}
