import play from '../index.js';
import generateRandom from '../generateRandom.js';

const rule = 'What number is missing in the progression?';
// создаем прогрессию
const createProgression = (start, length, counter) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(start + counter * i);
  }
  return result;
};

// меняем элемент прогрессии
const generateQuestion = (progression, item) => {
  const newProgression = progression.slice(0);
  const newItem = item;
  newProg[newItem] = '..';
  return newProgression.join(' ');
};

// задаем вопрос - получаем ответ
const generateRound = () => {
  const num1 = generateRandom(1, 10);
  const randomStep = generateRandom(1, 5);
  const progLength = generateRandom(5, 10);
  const randomElement = generateRandom(1, progressionLength);
  // создаем прогрессию
  const progression = createProgression(num1, progLength, randomStep);
  // удаляем элемент, то есть генерируем вопрос
  const question = progWithoutElement(progression, randomElement);
  // получаем правильный ответ = удаленный элемент
  const deletedElement = num1 + (randomStep * randomElement);
  const answer = String(deletedElement);
  return [question, answer];
};

const brainProgression = () => play(rule, generateRound);

export default brainProgression;
