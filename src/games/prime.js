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
  console.log(`Question: ${number}`);
  return isPrime(number) ? 'yes' : 'no';
};

const playPrimeGame = () => {
  const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  play(primeNumber, question);
};

export default playPrimeGame;
