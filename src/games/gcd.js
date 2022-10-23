import playGame from '../index.js';
import generateRandomNumber from '../randomNumbers.js';

const generateOneRoundGcdGame = () => {
  let number1 = generateRandomNumber(1, 100);
  let number2 = generateRandomNumber(1, 100);
  const roundQuestion = `${number1} ${number2}`;

  while (number1 !== 0 && number2 !== 0) {
    if (number1 > number2) {
      number1 %= number2;
    } else {
      number2 %= number1;
    }
  }

  const solution = String(number1 + number2);
  return [roundQuestion, solution];
};

const playGcdGame = () => {
  const gameQuestion = 'Find the greatest common divisor of given numbers.';
  playGame(generateOneRoundGcdGame, gameQuestion);
};

export default playGcdGame;
