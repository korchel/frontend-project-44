import playGame from '../index.js';
import generateRandomNumber from '../randomNumbers.js';

const isPrime = (number) => {
  let numberIsPrime = true;
  for (let n = 2; n < number / 2 + 1; n += 1) {
    if (number % n === 0) {
      numberIsPrime = false;
      break;
    }
  }
  return numberIsPrime;
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
