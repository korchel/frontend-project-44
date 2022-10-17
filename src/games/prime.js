import play from '../index.js';
import randomNumber from '../randomNumbers.js';

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

const primeNumber = () => {
  const number = randomNumber(2, 100);
  const question = `${number}`;
  const solution = isPrime(number) ? 'yes' : 'no';
  return [question, solution];
};

const playPrimeGame = () => {
  const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  play(primeNumber, gameQuestion);
};

export default playPrimeGame;
