const {sum, myRemove, myFizzBuzz} = require('./sum');

describe('Exercicio 1', () => {
  it('A função recebe 4 e 5, e retorna 9', () => {
    expect(sum(4,5)).toBe(9);
  });
  it('A função recebe 0 e 0, e retorna 0', () => {
    expect(sum(0,0)).toBe(0);
  });
  it('A função recebe 4 e "5", e retorna error', () => {
    expect(() => { sum(4,"5") }).toThrow();
  });
  it('Verifica se a mensagem de erro é "parameters must be numbers"', () => {
    expect(() => { sum(4,"6") }).toThrowError(new Error("parameters must be numbers"));
  });
});

describe('Exercicio 2', () => {
  it('A função recebe [1, 2, 3, 4] e 3, e retorna [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it('A função recebe [1, 2, 3, 4] e 3, e não retorna [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('A função recebe [1, 2, 3, 4] e 5, e retorna [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

describe('Exercicio 3', () => {
  test('A função recebe 15 e retorna "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  test('A função recebe 9 e retorna "fizz"', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });
  test('A função recebe 5 e retorna "buzz"', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  });
  test('A função recebe 7 e retorna 7', () => {
    expect(myFizzBuzz(7)).toBe(7);
  });
  test('A função recebe "7" e retorna false', () => {
    expect(myFizzBuzz("7")).toBe(false);
  });
});