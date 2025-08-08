/* eslint-disable @typescript-eslint/no-unsafe-return */
import readlineSync from 'readline-sync'

let name = ''
const greetMessage = 'greeting'
const returnName = 'name'
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const greeting = (typeMessage) => {
  if (typeMessage === greetMessage) {
    console.log('Welcome to the Brain Games!')
    name = readlineSync.question('May I have your name? ')
    console.log(`Hello, ${name}!`)
    return name
  }
  else if (typeMessage === 'name') {
    return name
  }
}

const getAnswer = () => {
  const request = readlineSync.question('Your answer: ')
  return request
}

const tryAgain = () => {
  console.log(`Let's try again, ${greeting(returnName)}!`)
}

const victoryMessage = () => {
  console.log(`Congratulations, ${greeting(returnName)}!`)
}

const rules = {
  checkingForParity: 'Answer "yes" if the number is even, otherwise answer "no".',
  uncorrectAnswer: ' is wrong answer ;(. Correct answer was ',
  correctAnswer: 'Correct!',
  calculatorGame: 'What is the result of the expression?',
  nodGame: 'Find the greatest common divisor of given numbers.',
  arithmeticProgression: 'What number is missing in the progression?',
  simpleNumber: 'Answer "yes" if given number is prime. Otherwise answer "no".',

}
  const isEven = number => number % 2 === 0

export default {
  getRandomNumber,
  greetMessage,
  greeting,
  getAnswer,
  tryAgain,
  victoryMessage,
  rules,
  isEven,
}
