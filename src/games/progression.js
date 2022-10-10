import { play } from '../index.js';
import getUserName from '../cli.js'

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const randomIndex = (array) => Math.floor(Math.random() * array.length);

const sequenceGenerator = () => {
    const sequenceDifference = randomNumber(2, 11);
    const numberOfSequenceMembers = randomNumber(5, 11);
    const sequence = Array.from({ length: numberOfSequenceMembers }).map((item, index) => {
        item = (index + 1) * sequenceDifference;
        return item;
    });
    const indexOfHiddenMember = randomIndex(sequence);
    const hiddenMember = sequence[indexOfHiddenMember];
    sequence.splice(indexOfHiddenMember, 1, '..');
    console.log(sequence.join(' '));
    return String(hiddenMember);
};

const progressionGame = () => {
    const userName = getUserName();
    console.log('What number is missing in the progression?');
    play(3, sequenceGenerator, userName);
};


export default progressionGame;