import { getRandom } from '../helpers/helpers.js'
import { playGames } from '../index.js'

const operators = ['+', '-', '*']
const description = 'What is the result of the expression?'
const generateAnswer = (number1, number2, operator) => {
  let correctAnswer
  switch (operator) {
    case '+':
      correctAnswer = number1 + number2
      break
    case '-':
      correctAnswer = number1 - number2
      break
    case '*':
      correctAnswer = number1 * number2
      break
    default:
      throw new Error('Unknown operator')
  }
  return correctAnswer.toString()
}

const generateRound = () => {
  const number1 = getRandom(1, 10)
  const number2 = getRandom(1, 10)
  const operator = operators[0, getRandom(0, operators.length - 1)]
  const question = `${number1} ${operator} ${number2}`
  const correctAnswer = generateAnswer(number1, number2, operator)
  return { question, correctAnswer }
}

const playGame = () => {
  playGames(description, generateRound)
}

export default playGame
