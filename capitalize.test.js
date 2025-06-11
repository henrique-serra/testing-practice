const capitalize = require('./capitalize');

describe('Capitalize', () => {
  test('capitalized exists', () => {
    expect(capitalize).toBeDefined();
  });

  const strCases = [
    ['word', 'Word'],
    ['bla', 'Bla'],
    ['abc dfg', 'Abc dfg'],
    ['abc Dfg', 'Abc Dfg'],
  ];

  const errorCases = [
    [1, 'Parâmetro deve ser uma string'],
    [null, 'Parâmetro deve ser uma string'],
    [undefined, 'Parâmetro deve ser uma string'],
    [{}, 'Parâmetro deve ser uma string'],
    [[], 'Parâmetro deve ser uma string'],
  ];

  strCases.forEach((t) => {
    const [ str, expected ] = t;
    
    test(`capitalize(${JSON.stringify(str)}) === "${expected}"`, () => {
      expect(capitalize(str)).toBe(expected);
    });
  });

  errorCases.forEach((e) => {
    const [ str, expected ] = e;
    test(`capitalize(${JSON.stringify(str)}) deve lançar erro: ${expected}`, () => {
      expect(() => capitalize(str)).toThrow(expected);
    })
  });
})