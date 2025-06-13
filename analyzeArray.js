module.exports = function analyzeArray(array) {
  if(!Array.isArray(array)) throw new Error();
  let sum = 0;
  let min = array[0];
  let max = array[0];
  let length = array.length;

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if(isNaN(Number(element))) throw new Error('Not a number');
    sum += element;
    min = element < min ? element : min;
    max = element > max ? element : max;
  }

  let average = sum / length;

  return { average, min, max, length }
}