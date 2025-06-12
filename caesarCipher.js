const charCodes = {
  lowerChar: Array.from({ length: 122 - 97 + 1 }, (_, i) => i + 97),
  upperChar: Array.from({ length: 90 - 65 + 1 }, (_, i) => i + 65),
};

function isUpperCase(charCode) {
  return charCode >= 65 && charCode <= 90;
}

function isLowerCase(charCode) {
  return charCode >= 97 && charCode <= 122;
}

function shiftChar(charCode, shiftFactor) {
  // Get the current position in the respective array by subtracting its charCode with the minimum charCode of the group
  // Get the new position by adding the shiftFactor
  // Ensure that index is not extrapolated, by reseting it with % 26
  // Use .at to tackle negative shifFactor cases
  if(isUpperCase(charCode)) charCode = charCodes.upperChar.at((charCode - 65 + shiftFactor) % 26);
  if(isLowerCase(charCode)) charCode = charCodes.lowerChar.at((charCode - 97 + shiftFactor) % 26);
  return String.fromCharCode(charCode);
}

module.exports = function caesarCipher(string, shiftFactor) {
  if(typeof string !== 'string' || typeof shiftFactor !== 'number') throw new Error();
  
  let cipheredString = '';
  for (const letter of string) {
    const charCode = letter.charCodeAt(0);
    const shiftedChar = shiftChar(charCode, shiftFactor);
    cipheredString += shiftedChar;
  }

  return cipheredString;
}