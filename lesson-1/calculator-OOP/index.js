const [operation, ...args] = process.argv.slice(2);

const numbers = args.map((num) => Number(num));

const CalculatorOpp = require('./CalculatorOpp');
new CalculatorOpp(operation, numbers).init();
