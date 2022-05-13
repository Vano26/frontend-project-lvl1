import play from '../index.js';
import generateRandom from '../generateRandom.js';

const rule = 'What number is missing in the progression?';

const createProgression = (start, length, counter) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(start + counter * i);
  }
  return result;
};

const generateQuestion = (progression, item) => {
  const newProgression = progression.slice(0);
  newProgression[item] = '..';
  return newProgression.join(' ');
};

const generateRound = () => {
  const num1 = generateRandom(1, 10);
  const randomStep = generateRandom(1, 5);
  const progressionLength = generateRandom(5, 10);
  const randomElement = generateRandom(1, progressionLength - 1);
  const progression = createProgression(num1, progressionLength, randomStep);
  const question = generateQuestion(progression, randomElement);
  const deletedElement = num1 + (randomStep * randomElement);
  const answer = String(deletedElement);
  return [question, answer];
};

const brainProgression = () => play(rule, generateRound);

export default brainProgression;
