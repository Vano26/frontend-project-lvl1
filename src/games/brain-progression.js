import { randomNum, game } from '../index.js';

const rule = 'What number is missing in the progression?';
// создаем прогрессию
const prog = (start, length, counter) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(start + counter * i);
  }
  return result;
};

// меняем элемент прогрессии
const progWithoutElement = (progression, item) => {
  const newProg = progression.slice(0);
  const newItem = item;
  newProg[newItem] = '..';
  return newProg.join(' ');
};

// задаем вопрос - получаем ответ
const questionAnswer = () => {
  const num1 = randomNum(1, 10);
  const randomStep = randomNum(1, 5);
  const progLength = randomNum(5, 10);
  const randomElement = randomNum(1, progLength);
  // создаем прогрессию
  const progression = prog(num1, progLength, randomStep);
  // удаляем элемент, то есть генерируем вопрос
  const question = progWithoutElement(progression, randomElement);
  // получаем правильный ответ = удаленный элемент
  const delElement = num1 + (randomStep * randomElement);
  const answer = String(delElement);
  return [question, answer];
};

const brainProgression = () => game(rule, questionAnswer);

export default brainProgression;
