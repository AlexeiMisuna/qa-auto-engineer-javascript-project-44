// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unsafe-return */
import readlineSync from 'readline-sync'

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const isEven = number => number % 2 === 0

export const checkingForParity = () => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  for (let i = 0; i < 3; i++) {
    const numberForQuestion = getRandomNumber(1, 100)
    console.log(`Question: ${numberForQuestion}`)
    const request = readlineSync.question('Your answer: ')

    const correctAnswer = isEven(numberForQuestion) ? 'yes' : 'no'

    if (request === correctAnswer) {
      console.log('Correct')
    }
    else if (request !== 'yes' && request !== 'no') {
      console.log(`${request} is wrong answer ;(. Correct answer was 'yes' or 'no'.`)
      return
    }
    else {
      console.log(`'${request}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }

  console.log(`Congratulations, ${name}!`)
}
