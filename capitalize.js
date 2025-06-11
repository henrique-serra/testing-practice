module.exports = function capitalize(str) {
  if(typeof str !== 'string') {
    throw new Error('Parâmetro deve ser uma string');
  }
  
  return str[0].toUpperCase() + str.slice(1);
}