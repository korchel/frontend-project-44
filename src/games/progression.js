import play from '../index.js';
import randomNumber from '../randomNumbers.js';

const randomIndex = (array) => Math.floor(Math.random() * array.length);

const makeSequence = (sequenceLength, sequenceDifference) => Array.from({ length: sequenceLength })
  .map((item, index) => (index + 1) * sequenceDifference);

const sequenceGenerator = () => {
  const sequenceDifference = randomNumber(2, 11);
  const sequenceLength = randomNumber(5, 11);
  const sequence = makeSequence(sequenceLength, sequenceDifference);
  const indexOfHiddenMember = randomIndex(sequence);
  const hiddenMember = sequence[indexOfHiddenMember];
  sequence.splice(indexOfHiddenMember, 1, '..');
  const question = `${sequence.join(' ')}`;
  const solution = String(hiddenMember);
  return [question, solution];
};

const playProgressionGame = () => {
  const gameQuestion = 'What number is missing in the progression?';
  play(sequenceGenerator, gameQuestion);
};

export default playProgressionGame;
