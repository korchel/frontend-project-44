import playGame from '../index.js';
import generateRandomNumber from '../randomNumbers.js';

const getGcd = (number1, number2) => {
  let a = number1;
  let b = number2;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};

const generateOneRoundGcdGame = () => {
  const number1 = generateRandomNumber(1, 100);
  const number2 = generateRandomNumber(1, 100);

  const roundQuestion = `${number1} ${number2}`;
  const solution = String(getGcd(number1, number2));
  return [roundQuestion, solution];
};

const playGcdGame = () => {
  const gameQuestion = 'Find the greatest common divisor of given numbers.';
  playGame(generateOneRoundGcdGame, gameQuestion);
};

export default playGcdGame;
