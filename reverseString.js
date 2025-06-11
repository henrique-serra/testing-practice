module.exports = function reverseString(str) {
  if(typeof str !== 'string') throw new Error('Parâmetro deve ser uma string');

  let reverseString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    const letter = str[i];
    reverseString += letter;
  }

  return reverseString;
}