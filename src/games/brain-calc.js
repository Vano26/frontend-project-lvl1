import play from '../index.js';
import generateRandom from '../generateRandom.js';

const rule = 'What is the result of the expression?';

const calc = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2; 
  }
};

const operators = ['+', '-', '*'];

const generateRound = () => {
  const newOperator = operators[generateRandom(0, 2)];
  const newNum1 = generateRandom(1, 10);
  const newNum2 = generateRandom(1, 10);
  const question = `${newNum1} ${newOperator} ${newNum2}`;
  const answer = String(calc(newNum1, newNum2, newOperator));
  return [question, answer];
};

const brainCalc = () => play(rule, generateRound);

export default brainCalc;
