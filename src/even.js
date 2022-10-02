import readlineSync from 'readline-sync';

const isEven = n => (n % 2) === 0 ? true : false;
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const isEvenGame = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    let counter = 0;
    while (counter < 3) {
        const number = randomNumber(0, 1000);
        const rightAnswer = isEven(number) ? 'yes' : 'no';
        console.log(number);
        const userAnswer = readlineSync.question('Your answer: ');
        if (userAnswer !== rightAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}`);
            return;
        } else {
            console.log('Correct!');
        }
        counter += 1; 
    }
    console.log(`Congratulations, ${userName}!`);
};

export default isEvenGame;