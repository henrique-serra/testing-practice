class Calculator {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.errorCases = ['null', 'undefined', 'object', 'array'];
  }

  parseInput(value) {
    const type = typeof value;

    if(this.errorCases.includes(type)) throw new Error();
    if(type === 'string') value = Number(value);
    if((isNaN(value))) throw new Error();

    return value;
  }

  add(x = this.x, y = this.y) {
    x = this.parseInput(x);
    y = this.parseInput(y);
    return x + y
  }

  subtract(x = this.x, y = this.y) {
    
  }

  divide(x = this.x, y = this.y) {
    
  }

  multiply(x = this.x, y = this.y) {
    
  }
}

const calculator = new Calculator();

module.exports = calculator;