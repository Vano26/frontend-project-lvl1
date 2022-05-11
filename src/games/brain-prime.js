import play from '../index.js';
import generateRandom from '../generateRandom.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const num = generateRandom(1, 100);
  const question = num;
  const answer = isPrime(num) ? 'yes' : 'no';
  return [question, answer];
};

const brainPrime = () => play(rule, generateRound);

export default brainPrime;
