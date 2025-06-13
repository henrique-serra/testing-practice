const analyzeArray = require('./analyzeArray');
const validCases = [
  // Caso base com múltiplos inteiros
  [
    [1, 8, 3, 4, 2, 6], 
    {
      average: 4,
      min: 1,
      max: 8,
      length: 6
    }
  ],

  // Apenas um número
  [
    [5],
    {
      average: 5,
      min: 5,
      max: 5,
      length: 1
    }
  ],

  // Números negativos
  [
    [-2, -4, -1, -8],
    {
      average: -3.75,
      min: -8,
      max: -1,
      length: 4
    }
  ],

  // Números repetidos
  [
    [2, 2, 2, 2],
    {
      average: 2,
      min: 2,
      max: 2,
      length: 4
    }
  ],

  // Números decimais
  [
    [1.5, 2.5, 3.5],
    {
      average: 2.5,
      min: 1.5,
      max: 3.5,
      length: 3
    }
  ],

  // Grande quantidade de números
  [
    Array.from({ length: 100 }, (_, i) => i + 1),
    {
      average: 50.5,
      min: 1,
      max: 100,
      length: 100
    }
  ],

  // Incluindo zero
  [
    [0, 10, 20, 30],
    {
      average: 15,
      min: 0,
      max: 30,
      length: 4
    }
  ]
];

const errorCases = [
  [null, Error],
  [undefined, Error],
  [{}, Error],
  ['string', Error],
  [123, Error],
  [true, Error],
  [['a', 'b', 'c'], 'Not a number']
];

describe('analyzeArray', () => {
  test('analyzeArray exists', () => {
    expect(analyzeArray).toBeDefined();
  });

  describe('error cases', () => {
    test.each(errorCases)(
      'analyzeArray(%p) should throw',
      (input) => {
        expect(() => analyzeArray(input)).toThrow();
      }
    )
  });

  describe('valid cases', () => {
    test.each(validCases)(
      'analyzeArray(%p) should return %p',
      (input, expected) => {
        expect(analyzeArray(input)).toEqual(expected);
      }
    )
  })
})