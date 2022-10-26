import playGame from '../index.js';
import generateRandomNumber from '../randomNumbers.js';

const isPrime = (number) => {
  if (number < 2) {
    throw new Error('The number must be greater than 1!');
  }
  for (let n = 2; n <= Math.sqrt(number); n += 1) {
    if (number % n === 0) {
      return false;
    }
  }
  return true;
};

const generateOneRoundPrimeGame = () => {
  const number = generateRandomNumber(2, 100);
  const roundQuestion = String(number);
  const solution = isPrime(number) ? 'yes' : 'no';
  return [roundQuestion, solution];
};

const playPrimeGame = () => {
  const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  playGame(generateOneRoundPrimeGame, gameQuestion);
};

export default playPrimeGame;
