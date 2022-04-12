const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George. R. R. H. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'Humberto. P. O. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

// Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais (terminam com um ponto).

// const expectedResult = 'O Senhor dos Anéis';

// function authorWith3DotsOnName() {
//   const result = books.find((livro) => livro.author.name[1] === '.' && livro.author.name[4] === '.' && livro.author.name[7] === '.');
//   return result.name;
// }
// console.log(authorWith3DotsOnName());

const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  return books.filter((book) => {
    const livroSplit = book.author.name.split(' ');
    livroSplit.length = 3;
    if (livroSplit[0].length === 2 && livroSplit[1].length === 2 && livroSplit[2].length === 2) {
      return livroSplit.filter((word) => word.endsWith('.')).length === 3;
    }
  })
}

console.log(authorWith3DotsOnName()[0].name);