//lesson-1
// console.log(process.env.alina);
// console.log(process.env.vitaliy);
// console.log(process.argv);

// 1.sum, 2.sub, 3.mult, 4.div

// const result = process.argv.slice(2);
const [operation, ...args] = process.argv.slice(2);
// console.log(result);
const numbers = args.map((num) => Number(num));
// a = callbackFunction;
// b = accStart;
// [].reduce(a, b);
// const total = numbers.reduce((acc, elem, idx, arr) => {
//   return acc + elem;
// });
// console.log('operation', operation);
// console.log('numbers', numbers);

let total = null;

// console.log('substruct', substruct);
// const showResult = (total) => {
//   console.log('total', total);
// };
switch (operation) {
  case 'sum':
    // total = numbers.reduce((acc, elem) => acc + elem);
    total = setOperationType('+');
    showResult(total);
    break;
  case 'sub':
    // total = numbers.reduce((acc, elem) => acc - elem);
    total = setOperationType('-');
    showResult(total);
    break;
  case 'mult':
    // total = numbers.reduce((acc, elem) => acc * elem);
    total = setOperationType('*');
    showResult(total);
    break;
  case 'div':
    // total = numbers.reduce((acc, elem) => acc / elem);
    total = setOperationType('/');
    showResult(total);
    break;

  default:
    console.log('Type operation undefined');
    break;
}

function showResult(total) {
  console.log('total', total);
}
function setOperationType(operation) {
  // return numbers.reduce((acc, elem) => acc (operation) elem);
  let total = null;
  switch (operation) {
    case '+':
      total = numbers.reduce((acc, elem) => acc + elem);
      break;
    case '-':
      total = numbers.reduce((acc, elem) => acc - elem);
      break;
    case '*':
      total = numbers.reduce((acc, elem) => acc * elem);
      break;
    case '/':
      total = numbers.reduce((acc, elem) => acc / elem);
      break;
  }
  return total;
}
