import readlineSync from 'readline-sync';

const playGame = (generateOneRoundData, gameQuestion) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameQuestion);

  const numberOfRounds = 3;
  for (let i = 1; i <= numberOfRounds; i += 1) {
    const [roundQuestion, rightAnswer] = generateOneRoundData();
    console.log(`Question: ${roundQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== rightAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
