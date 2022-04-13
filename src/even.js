#!/usr/bin/env node

import readlineSync from 'readline-sync';

const isEven = () => {
	console.log('Answer "yes" if the number is even, otherwise answer "no".');
	console.log('Question: 15')
	const answer = readlineSync.question('Your answer: ');
	if (answer === 'no') {
	  console.log('Correct!');
	} else {
	 return console.log(`${answer} is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
	}
};

export default isEven;
