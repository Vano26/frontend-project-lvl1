import play from '../index.js';
import generateRandom from '../genereteRandom.js';

const rule = 'Find the greatest common divisor of given numbers.';

const NOD = (x, y) => {
  if (y === 0) {
    return x;
  }
  return NOD(y, x % y);
};

const questionAnswer = () => {
  const num1 = generateRandom(1, 100);
  const num2 = generateRandom(1, 100);
  const question = `${num1} ${num2}`;
  const answer = String(NOD(num1, num2));
  return [question, answer];
};

const brainGCD = () => play(rule, questionAnswer);

export default brainGCD;
