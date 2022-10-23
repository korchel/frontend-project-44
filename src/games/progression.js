import playGame from '../index.js';
import generateRandomNumber from '../randomNumbers.js';

const makeSequence = (sequenceLength, sequenceDifference) => Array.from({ length: sequenceLength })
  .map((item, index) => (index + 1) * sequenceDifference);

const generateOneRoundProgressionGame = () => {
  const sequenceDifference = generateRandomNumber(2, 11);
  const sequenceLength = generateRandomNumber(5, 11);
  const sequence = makeSequence(sequenceLength, sequenceDifference);

  const indexOfHiddenMember = generateRandomNumber(0, sequence.length - 1);
  const hiddenMember = sequence[indexOfHiddenMember];
  sequence[indexOfHiddenMember] = '..';
  
  const roundQuestion = sequence.join(' ');
  const solution = String(hiddenMember);
  return [roundQuestion, solution];
};

const playProgressionGame = () => {
  const gameQuestion = 'What number is missing in the progression?';
  playGame(generateOneRoundProgressionGame, gameQuestion);
};

export default playProgressionGame;
