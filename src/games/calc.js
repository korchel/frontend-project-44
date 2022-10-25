import playGame from '../index.js';
import generateRandomNumber from '../randomNumbers.js';

const calculateExpression = (operand1, operand2, operation) => {
  switch (operation) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      throw new Error(`Unknown operation ${operation}`);
  }
};

const operations = ['+', '-', '*'];

const generateOneRoundCalculationGame = () => {
  const operand1 = generateRandomNumber(0, 10);
  const operand2 = generateRandomNumber(0, 10);
  const operation = operations[generateRandomNumber(0, operations.length - 1)];

  const roundQuestion = `${operand1} ${operation} ${operand2}`;
  const solution = String(calculateExpression(operand1, operand2, operation));
  return [roundQuestion, solution];
};

const playCalculationGame = () => {
  const gameQuestion = 'What is the result of the expression?';
  playGame(generateOneRoundCalculationGame, gameQuestion);
};

export default playCalculationGame;
