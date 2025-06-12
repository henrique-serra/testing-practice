class Calculator {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.errorCases = ['null', 'undefined', 'object', 'array'];
  }

  add(x = this.x, y = this.y) {
    if(this.errorCases.includes(typeof x) || this.errorCases.includes(typeof y)) throw new Error();
    if(typeof x === 'string') x = Number(x);
    if(typeof y === 'string') y = Number(y);
    if(isNaN(x)) throw new Error();
    if(isNaN(y)) throw new Error();
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