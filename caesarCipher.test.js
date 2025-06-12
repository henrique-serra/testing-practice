const caesarCipher = require('./caesarCipher');
const errorCases = [null, undefined, {}, []];
const invalidCombinations = errorCases.flatMap((e) => [
  ['abc', e],
  [e, 2]
])
const caesarCipherCases = [
  // Básico com minúsculas
  ['abc', 3, 'def'],
  ['xyz', 3, 'abc'],
  ['hello', 5, 'mjqqt'],

  // Com maiúsculas
  ['ABC', 1, 'BCD'],
  ['XYZ', 2, 'ZAB'],

  // Mistura de maiúsculas e minúsculas
  ['AbC', 2, 'CdE'],
  ['XyZ', 4, 'BcD'],

  // Com pontuação e espaços
  ['abc!', 1, 'bcd!'],
  ['Hello, World!', 5, 'Mjqqt, Btwqi!'],

  // Shifts negativos
  ['def', -3, 'abc'],
  ['abc', -1, 'zab'],
  ['ABC', -2, 'YZA'],

  // Shifts maiores que 26 (ciclo completo)
  ['abc', 29, 'def'], // 29 ≡ 3 mod 26
  ['xyz', 52, 'xyz'], // 52 ≡ 0 mod 26 (sem mudança)

  // Casos de borda
  ['', 3, ''],                 // string vazia
  ['1234', 5, '1234'],         // só números
  ['Zebra!', 1, 'Afcsb!'],     // mistura com pontuação

  // Teste com shift negativo maior que 26
  ['def', -29, 'abc'],         // -29 ≡ -3 mod 26

  // Mistura total
  ['aBc XyZ!', 1, 'bCd YzA!']
];

describe('caesarCipher', () => {
  test('caesarCipher exists', () => {
    expect(caesarCipher).toBeDefined();
  });

  describe('error cases', () => {
    test.each(invalidCombinations)(
      `caesarCipher(%p, %p) should throw error`,
      (x, y) => {
        expect(() => caesarCipher(x, y)).toThrow();
      }
    )
  });

  describe('valid cases', () => {
    test.each(caesarCipherCases)(
      `caesarChiper(%p, %p) should return %p`,
      (x, y, expected) => {
        expect(caesarCipher(x, y)).toBe(expected)
      }
    )
  })
})