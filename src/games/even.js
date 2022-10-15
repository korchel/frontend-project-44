import play from '../index.js';
import randomNumber from '../randomNumbers.js';

const isEven = (n) => ((n % 2) === 0);

const even = () => {
  const number = randomNumber(0, 1000);
  console.log(`Question: ${number}`);
  return isEven(number) ? 'yes' : 'no';
};

const playIsEvenGame = () => {
  const question = 'Answer "yes" if the number is even, otherwise answer "no".';
  play(even, question);
};

export default playIsEvenGame;
