import helpers from '../helpers/helpers.js'
import { playGames } from '../index.js'

const operators = ['+', '-', '*']
const description = 'What is the result of the expression?'

const getRandomElement = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length)
  return arr[randomIndex]
}

const generateRound = () => {
  const number1 = helpers.getRandomNumber(1, 10)
  const number2 = helpers.getRandomNumber(1, 10)
  const operator = getRandomElement(operators)
  const question = `Question: ${number1} ${operator} ${number2}`
  let correctAnswer
  switch (operator) {
    case '+':
      correctAnswer = (number1 + number2).toString()
      break
    case '-':
      correctAnswer = (number1 - number2).toString()
      break
    case '*':
      correctAnswer = (number1 * number2).toString()
      break
  }
  return { question, correctAnswer }
}

const playGame = () => {
  playGames(description, generateRound)
}

export default playGame
