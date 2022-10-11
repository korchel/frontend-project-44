import { play } from '../index.js';
import getUserName from '../cli.js';

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const primeNumber = () => {
  const number = randomNumber(2, 100);
  console.log(`Question: ${number}`);
  let numberIsPrime = true;
  for (let n = 2; n < number / 2 + 1; n += 1) {
    if (number % n === 0) {
      numberIsPrime = false;
      break;
    }
  }
  return numberIsPrime ? 'yes' : 'no';
};

const primeGame = () => {
  const userName = getUserName();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  play(3, primeNumber, userName);
};

export default primeGame;
