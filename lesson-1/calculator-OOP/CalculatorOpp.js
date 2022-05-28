class CalculatorOpp {
  constructor(operation, numbers) {
    this.operation = operation;
    this.numbers = numbers;
  }

  defineOperation(operation) {
    let total = null;

    switch (operation) {
      case 'sum':
        total = this.setOperationType('+', this.numbers);

        this.showResult(total);
        break;
      case 'sub':
        total = this.setOperationType('-', this.numbers);
        this.showResult(total);
        break;
      case 'mult':
        total = this.setOperationType('*', this.numbers);
        this.showResult(total);
        break;
      case 'div':
        total = this.setOperationType('/', this.numbers);
        this.showResult(total);
        break;

      default:
        console.log('Type operation undefined');
        break;
    }
  }
  setOperationType(operation) {
    let total = null;
    switch (operation) {
      case '+':
        total = this.numbers.reduce((acc, elem) => acc + elem);
        break;
      case '-':
        total = this.numbers.reduce((acc, elem) => acc - elem);
        break;
      case '*':
        total = this.numbers.reduce((acc, elem) => acc * elem);
        break;
      case '/':
        total = this.numbers.reduce((acc, elem) => acc / elem);
        break;
    }
    return total;
  }
  showResult(total) {
    console.log('total', total);
  }
  init() {
    this.defineOperation(this.operation, this.numbers);
  }
}

module.exports = CalculatorOpp;
