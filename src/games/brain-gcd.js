import play from '../index.js';
import generateRandom from '../generateRandom.js';

const rule = 'Find the greatest common divisor of given numbers.';

const gcd = (x, y) => {
  if (y === 0) {
    return x;
  }
  return gcd(y, x % y);
};

const generateRound = () => {
  const num1 = generateRandom(1, 100);
  const num2 = generateRandom(1, 100);
  const question = `${num1} ${num2}`;
  const answer = String(gcd(num1, num2));
  return [question, answer];
};

const brainGCD = () => play(rule, generateRound);

export default brainGCD;
