const [operation, ...args] = process.argv.slice(2);

const numbers = args.map((num) => Number(num));
const { defineOperation } = require('./operations');

defineOperation(operation, numbers);
// function defineOperation(operation) {
//   let total = null;

//   switch (operation) {
//     case 'sum':
//       total = setOperationType('+');
//       showResult(total);
//       break;
//     case 'sub':
//       total = setOperationType('-');
//       showResult(total);
//       break;
//     case 'mult':
//       total = setOperationType('*');
//       showResult(total);
//       break;
//     case 'div':
//       total = setOperationType('/');
//       showResult(total);
//       break;

//     default:
//       console.log('Type operation undefined');
//       break;
//   }
// }
// function showResult(total) {
//   console.log('total', total);
// }

// function setOperationType(operation) {
//   let total = null;
//   switch (operation) {
//     case '+':
//       total = numbers.reduce((acc, elem) => acc + elem);
//       break;
//     case '-':
//       total = numbers.reduce((acc, elem) => acc - elem);
//       break;
//     case '*':
//       total = numbers.reduce((acc, elem) => acc * elem);
//       break;
//     case '/':
//       total = numbers.reduce((acc, elem) => acc / elem);
//       break;
//   }
//   return total;
// }
