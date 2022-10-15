import play from '../index.js';
import randomNumber from '../randomNumbers.js';

const gcd = () => {
  let a = randomNumber(0, 100);
  let b = randomNumber(0, 100);
  console.log(`Question: ${a} ${b}`);
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return String(a + b);
};

const playGcdGame = () => {
  const question = 'Find the greatest common divisor of given numbers.';
  play(gcd, question);
};

export default playGcdGame;
