function setOperationType(operation, numbers) {
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

module.exports = setOperationType;
