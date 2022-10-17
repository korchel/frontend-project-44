import play from '../index.js';
import randomNumber from '../randomNumbers.js';

const gcd = () => {
  let a = randomNumber(1, 100);
  let b = randomNumber(1, 100);
  const question = `${a} ${b}`;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  const solution = String(a + b);
  return [question, solution];
};

const playGcdGame = () => {
  const gameQuestion = 'Find the greatest common divisor of given numbers.';
  play(gcd, gameQuestion);
};

export default playGcdGame;
