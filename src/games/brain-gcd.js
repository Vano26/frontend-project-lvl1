import { randomNum, game } from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const NOD = (x, y) => {
  if (y === 0) {
    return x;
  }
  return NOD(y, x % y);
};

const questionAnswer = () => {
  const num1 = randomNum(1, 101);
  const num2 = randomNum(1, 101);
  const question = `${num1} ${num2}`;
  const answer = String(NOD(num1, num2));
  return [question, answer];
};

const brainGCD = () => game(rule, questionAnswer);

export default brainGCD;
