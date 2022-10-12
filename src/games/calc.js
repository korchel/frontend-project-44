import { play } from '../index.js';
import getUserName from '../cli.js';

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const calculation = () => {
  const operand1 = randomNumber(0, 10);
  const operand2 = randomNumber(0, 10);
  const operations = ['+', '-', '*'];
  const operation = operations[Math.floor(Math.random() * operations.length)];
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
  console.log(`Question: ${operand1} ${operation} ${operand2}`);
  return result;
};

const calculatorGame = () => {
  const userName = getUserName();
  console.log('What is the result of the expression?');
  play(3, calculation, userName);
};

export default calculatorGame;
