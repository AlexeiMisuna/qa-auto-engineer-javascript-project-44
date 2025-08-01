import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

    const isEven = (number) => {
      return number % 2 === 0;
    }

export const checkingForParity = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`)
  console.log('Answer "yes" if the number is even, otherwise answer "no"')
  let correctAnswers = 0
  for (let i = 0; i < 3; i++) {
    const randomNumber = getRandomNumber(1, 100)
    console.log(`Question: ${randomNumber}`);
    const response = readlineSync.question('Your answer: ');

    if (isEven(randomNumber) && response === 'yes') {
      console.log('Correct')
      correctAnswers += 1
    }
    else if (!isEven(randomNumber) && response === 'no') {
      console.log('Correct');
      correctAnswers += 1
    }
    else if (isEven(randomNumber) && response === 'no') {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes")
      console.log(`Let's try again, ${name}!`)
      break
    }
    else if (!isEven(randomNumber) && response === 'yes') {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no")
      console.log(`Let's try again, ${name}!`)
      break
    }
    else if (response !== 'yes' || response !== 'no') {
      console.log(`${response} is wrong answer ;(. Correct answer was 'no' or 'yes'`)
      console.log(`Let's try again, ${name}!`)
      break
    }
      if (correctAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  }
  }
}
