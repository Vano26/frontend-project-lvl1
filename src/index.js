import readlineSync from 'readline-sync';

// функция генерации случайноего числа
export const randomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;
export const game = (rule, questionAnswer) => {
  // приветствие
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log(rule);

  for (let i = 0; i < 3; i += 1) {
  // задаем вопрос игроку
    const [question, answer] = questionAnswer();
    console.log(`Question: ${question}`);

    // получаем ответ
    const userAnswer = readlineSync.question('Your answer:');

    // сравниваем ответ игрока с верным
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`); // отвечаем игроку
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
