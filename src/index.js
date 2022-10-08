import readlineSync from 'readline-sync';

const play = (numberOfRounds, game, userName) => {
    let counter = 0;
    while (counter < numberOfRounds) {
        const rightAnswer = game();
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

export { play };