const showResult = require('../showResult');
const setOperationType = require('./setOperationType');
function defineOperation(operation, numbers) {
  let total = null;

  switch (operation) {
    case 'sum':
      total = setOperationType('+', numbers);

      showResult(total);
      break;
    case 'sub':
      total = setOperationType('-', numbers);
      showResult(total);
      break;
    case 'mult':
      total = setOperationType('*', numbers);
      showResult(total);
      break;
    case 'div':
      total = setOperationType('/', numbers);
      showResult(total);
      break;

    default:
      console.log('Type operation undefined');
      break;
  }
}
module.exports = defineOperation;
