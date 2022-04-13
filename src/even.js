import readlineSync from 'readline-sync';

const brainEven = () => {
  // приветствуем игрока
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);

  // сообщаем правила
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  // функция генерации случайноего числа
  const randomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  // функция проверки числа на четность
  const isEven = (num) => {
    if (num % 2 === 0) {
      return 'yes';
    } return 'no';
  };

  // первый раунд
  for (let i = 0; i < 3; i += 1) {
    const num = randomNum(1, 99); // генерим случайно число
    const answer = isEven(num); // проверяем первое число на четность
    console.log(`Question: ${num}`); // задаем вопрос
    const userAnswer = readlineSync.question('Your answer:'); // получаем ответ игрока
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

export default brainEven;
