import playGame from '../index.js';
import generateRandomNumber from '../randomNumbers.js';

const isEven = (n) => ((n % 2) === 0);

const generateOneRoundIsEvenGame = () => {
  const number = generateRandomNumber(0, 1000);
  const roundQuestion = String(number);
  const solution = isEven(number) ? 'yes' : 'no';
  return [roundQuestion, solution];
};

const playIsEvenGame = () => {
  const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
  playGame(generateOneRoundIsEvenGame, gameQuestion);
};

export default playIsEvenGame;
