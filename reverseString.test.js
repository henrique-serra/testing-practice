const reverseString = require('./reverseString');

describe('reverseString', () => {
  test('reverseString exists', () => {
    expect(reverseString).toBeDefined();
  });

  const errorCases = [
    [1, 'Parâmetro deve ser uma string'],
    [null, 'Parâmetro deve ser uma string'],
    [undefined, 'Parâmetro deve ser uma string'],
    [{}, 'Parâmetro deve ser uma string'],
    [[], 'Parâmetro deve ser uma string'],
  ];

  errorCases.forEach((e) => {
    const [ str, expected ] = e;
    test(`reverseString(${JSON.stringify(str)}) deve lançar erro: ${expected}`, () => {
      expect(() => reverseString(str)).toThrow(expected);
    })
  });

  test('str returns rts', () => {
    expect(reverseString('str')).toBe('rts');
  });

  test('new word returns drow wen', () => {
    expect(reverseString('str')).toBe('rts');
  });

  test('abc returns cba', () => {
    expect(reverseString('abc')).toBe('cba');
  });

  test('Abc returns cbA', () => {
    expect(reverseString('Abc')).toBe('cbA');
  });

  test('abC returns Cba', () => {
    expect(reverseString('abC')).toBe('Cba');
  });

  test('ponctuation test', () => {
    expect(reverseString('abc, dfg')).toBe('gfd ,cba');
  });
})