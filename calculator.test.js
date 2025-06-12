const calculator = require('./calculator');

describe('calculator', () => {
  test('calculator exists', () => {
    expect(calculator).toBeDefined();
  });

  const errorCases = [null, undefined, {}, []];
  const validValue = 10;
  const invalidCombinations = [];

  errorCases.forEach((errorCase) => {
    invalidCombinations.push([errorCase, validValue]);
    invalidCombinations.push([validValue, errorCase]);
  });

  describe('add', () => {
    const additionCases = [
      [1, 2, 3],
      [0, 0, 0],
      [-1, -1, -2],
      [1.5, 2.5, 4],
      [-3, 3, 0],
      ['1', '1', 2],
    ]

    test.each(invalidCombinations)(
      'calculator.add(%p, %p) should throw error',
      (x, y) => {
        expect(() => calculator.add(x, y)).toThrow()
      }
    )

    test.each(additionCases)(
       'calculator.add(%p, %p) should return %p',
       (x, y, expected) => {
        expect(calculator.add(x, y)).toBe(expected)
       }
    )

    test('0.1 + 0.2 = 0.3', () => {
      expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
    });

    test('string not number', () => {
      expect(() => calculator.add('string', 'string2')).toThrow();
    })

    // test.each(errorCases)('should throw an error for input %p', (input) => {
    //   expect(() => calculator.add(input))
    // })
  });

})