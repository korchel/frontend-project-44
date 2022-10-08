import { getUserName, play } from '../index.js';

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const gcd = () => {
    let a = randomNumber(0, 100);
    let b = randomNumber(0, 100);
    console.log(`Question: ${a} ${b}`)
    while (a !== 0 && b !== 0) {
        if (a > b) {
            a %= b;
        } else {
            b %= a;
        }
    }
    return String(a + b);
};

const gcdGame = () => {
    const userName = getUserName();
    console.log('Find the greatest common divisor of given numbers.');
    play(3, gcd, userName);
};


export default gcdGame;