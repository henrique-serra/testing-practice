const calculator = require('./calculator');
const errorCases = [null, undefined, {}, []];
const validValue = 10;
const invalidCombinations = errorCases.flatMap((err) => [
  [err, validValue],
  [validValue, err],
]);

const methodTestCases = {
  add: {
    valid: [
      [1, 2, 3],
      [0, 0, 0],
      [-1, -1, -2],
      [1.5, 2.5, 4],
      [-3, 3, 0],
      ['1', '1', 2],
      [0.1, 0.2, 0.3], // será tratado com `toBeCloseTo`
    ],
  },
  subtract: {
    valid: [
      [2, 1, 1],
      [1, 2, -1],
      [0, 0, 0],
      [-1, -1, 0],
      [1.5, 2.5, -1],
      [-3, 3, -6],
      ['1', '1', 0],
    ],
  },
  divide: {
    valid: [
      [10, 2, 5],
      [9, 3, 3],
      [7, 2, 3.5],
      [0, 5, 0],
      [-10, 2, -5],
      [10, -2, -5],
      [-10, -2, 5],
      [1.5, 0.5, 3],
      ['10', 2, 5],
      [10, '2', 5],
      ['6', '3', 2],
      [0, 0.5, 0],
      [0.5, 0.25, 2],
      [1000, 10, 100],
    ],
  }
};

describe('calculator', () => {
  test('calculator exists', () => {
    expect(calculator).toBeDefined();
  });

  Object.entries(methodTestCases).forEach(([method, { valid }]) => {
    describe(method, () => {
      describe('error cases', () => {
        test.each(invalidCombinations)(
          `calculator.${method}(%p, %p) should throw error`,
          (x, y) => {
            expect(() => calculator[method](x, y)).toThrow();
          }
        );

        test('non-numeric strings should throw', () => {
          expect(() => calculator[method]('abc', 'def')).toThrow();
        });
      });

      describe('valid cases', () => {
        valid.forEach(([x, y, expected]) => {
          const testName = `calculator.${method}(${JSON.stringify(x)}, ${JSON.stringify(y)}) → ${expected}`;

          test(testName, () => {
            const result = calculator[method](x, y);

            if(typeof expected === 'number' && !Number.isInteger(expected)) {
              expect(result).toBeCloseTo(expected);
            } else {
              expect(result).toBe(expected);
            }
          })
        })
      })
    })
  })
})