import { getRandom } from '../helpers/helpers.js'
import { playGames } from '../index.js'

const operators = ['+', '-', '*']
const description = 'What is the result of the expression?'

const generateAnswer = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2
    case '-':
      return number1 - number2
    case '*':
     return number1 * number2
    default:
      throw new Error('Unknown operator')
  }
}

const generateRound = () => {
  const number1 = getRandom(1, 10)
  const number2 = getRandom(1, 10)
  const operator = operators[0, getRandom(0, operators.length - 1)]
  const question = `${number1} ${operator} ${number2}`
  const correctAnswer = String(generateAnswer(number1, number2, operator))
  return { question, correctAnswer }
}

const playGame = () => {
  playGames(description, generateRound)
}

export default playGame
