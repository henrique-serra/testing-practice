const calculator = require('./calculator');
const errorCases = [null, undefined, {}, []];
const validValue = 10;
const invalidCombinations = [];

errorCases.forEach((errorCase) => {
  invalidCombinations.push([errorCase, validValue]);
  invalidCombinations.push([validValue, errorCase]);
});

describe('calculator', () => {
  test('calculator exists', () => {
    expect(calculator).toBeDefined();
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

    describe('error cases', () => {
      test.each(invalidCombinations)(
        'calculator.add(%p, %p) should throw error',
        (x, y) => {
          expect(() => calculator.add(x, y)).toThrow()
        }
      );

      test('string not number', () => {
        expect(() => calculator.add('string', 'string2')).toThrow();
      });
    });

    describe('addition cases', () => {
      test.each(additionCases)(
         'calculator.add(%p, %p) should return %p',
         (x, y, expected) => {
          expect(calculator.add(x, y)).toBe(expected)
         }
      )
  
      test('0.1 + 0.2 = 0.3', () => {
        expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
      });
    })



    // test.each(errorCases)('should throw an error for input %p', (input) => {
    //   expect(() => calculator.add(input))
    // })
  });

  describe('subtract', () => {
    const subtractionCases = [
      [2, 1, 1],
      [1, 2, -1],
      [0, 0, 0],
      [-1, -1, 0],
      [1.5, 2.5, -1],
      [-3, 3, -6],
      ['1', '1', 0],
    ]

    describe('error cases', () => {
      test.each(invalidCombinations)(
        'calculator.subtract(%p, %p) should throw error',
        (x, y) => {
          expect(() => calculator.subtract(x, y)).toThrow()
        }
      );

      test('string not number', () => {
        expect(() => calculator.subtract('string', 'string2')).toThrow();
      });
    });

    describe('subtraction cases', () => {
      test.each(subtractionCases)(
         'calculator.subtract(%p, %p) should return %p',
         (x, y, expected) => {
          expect(calculator.subtract(x, y)).toBe(expected)
         }
      )
    })
  });

  describe('divide', () => {
    const divisionCases = [
      [10, 2, 5],
      [9, 3, 3],
      [7, 2, 3.5],
      [0, 5, 0],
      [-10, 2, -5],
      [10, -2, -5],
      [-10, -2, 5],
      [1.5, 0.5, 3],
      ['10', 2, 5],         // string numérica
      [10, '2', 5],         // string numérica
      ['6', '3', 2],        // ambas como string numérica
      [0, 0.5, 0],
      [0.5, 0.25, 2],
      [1000, 10, 100],
    ];

    describe('error cases', () => {
      test.each(invalidCombinations)(
        'calculator.divide(%p, %p) should throw error',
        (x, y) => {
          expect(() => calculator.divide(x, y)).toThrow()
        }
      );

      test('string not number', () => {
        expect(() => calculator.divide('string', 'string2')).toThrow();
      });
    });

    describe('division cases', () => {
      test.each(divisionCases)(
         'calculator.divide(%p, %p) should return %p',
         (x, y, expected) => {
          expect(calculator.divide(x, y)).toBe(expected)
         }
      )
    })
  })

})