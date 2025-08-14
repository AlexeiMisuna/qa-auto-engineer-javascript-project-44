import helpers from '../helpers/helpers.js'
import { playGames } from '../index.js'

const description = 'Find the greatest common divisor of given numbers.'

const getGcd = (num1, num2) => {
  while (num2 !== 0) {
    const temp = num2
    num2 = num1 % num2
    num1 = temp
  }
  return num1
}

const generateRound = () => {
  const firstNumber = helpers.getRandomNumber(1, 100)
  const secondNumber = helpers.getRandomNumber(1, 100)
  const question = `Question: ${firstNumber} ${secondNumber}`
  const correctAnswer = getGcd(firstNumber, secondNumber).toString()
  return { question, correctAnswer }
}

const playGame = () => {
  playGames(description, generateRound)
}

export default playGame
