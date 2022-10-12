import play from '../index.js';
import getUserName from '../cli.js';

const isEven = (n) => ((n % 2) === 0);
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const even = () => {
  const number = randomNumber(0, 1000);
  console.log(`Question: ${number}`);
  return isEven(number) ? 'yes' : 'no';
};

const isEvenGame = () => {
  const userName = getUserName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  play(3, even, userName);
};

export default isEvenGame;
