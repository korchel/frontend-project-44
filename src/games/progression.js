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
  console.log(`Question: ${sequence.join(' ')}`);
  return String(hiddenMember);
};

const playProgressionGame = () => {
  const question = 'What number is missing in the progression?';
  play(sequenceGenerator, question);
};

export default playProgressionGame;
