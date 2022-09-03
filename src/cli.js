import readlineSync from 'readline-sync';
const questionName = () => {
    const name = readlineSync.question('Your answer: ');
    return name;
}
export { questionName };