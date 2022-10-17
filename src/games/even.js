import play from '../index.js';
import randomNumber from '../randomNumbers.js';

const isEven = (n) => ((n % 2) === 0);

const even = () => {
  const number = randomNumber(0, 1000);
  const question = `${number}`;
  const solution = isEven(number) ? 'yes' : 'no';
  return [question, solution];
};

const playIsEvenGame = () => {
  const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
  play(even, gameQuestion);
};

export default playIsEvenGame;
