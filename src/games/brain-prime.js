import { randomNum, game } from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// функция проверки простое ли число
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

// вопрос-ответ
const questionAnswer = () => {
  const num = randomNum(1, 100);
  const question = num;
  const answer = isPrime(num) ? 'yes' : 'no';
  return [question, answer];
};

const brainPrime = () => game(rule, questionAnswer);

export default brainPrime;
