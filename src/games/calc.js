import play from '../index.js';
import randomNumber from '../randomNumbers.js';

const randomIndex = (array) => Math.floor(Math.random() * array.length);

const miniCalculator = (operand1, operand2, operation) => {
  let result;
  switch (operation) {
    case '+':
      result = String(operand1 + operand2);
      break;
    case '-':
      result = String(operand1 - operand2);
      break;
    case '*':
      result = String(operand1 * operand2);
      break;
    default:
  }
  return result;
};

const calculation = () => {
  const operand1 = randomNumber(0, 10);
  const operand2 = randomNumber(0, 10);
  const operations = ['+', '-', '*'];
  const operation = operations[randomIndex(operations)];
  console.log(`Question: ${operand1} ${operation} ${operand2}`);
  return miniCalculator(operand1, operand2, operation);
};

const playCalculationGame = () => {
  const question = 'What is the result of the expression?';
  play(calculation, question);
};

export default playCalculationGame;
