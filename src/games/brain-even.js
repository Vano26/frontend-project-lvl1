import play from '../index.js';
import generateRandom from '../generateRandom.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const generateRound = () => {
  const question = generateRandom(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const brainEven = () => play(rule, generateRound);

export default brainEven;
