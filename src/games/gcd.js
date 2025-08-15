import { getRandom } from '../helpers/helpers.js'
import { playGames } from '../index.js'

const description = 'Find the greatest common divisor of given numbers.'

const getGcd = (a, b) => {
  if (b === 0) return a
  return getGcd(b, a % b)
}

const generateRound = () => {
  const firstNumber = getRandom(1, 100)
  const secondNumber = getRandom(1, 100)
  const question = `${firstNumber} ${secondNumber}`
  const correctAnswer = getGcd(firstNumber, secondNumber).toString()
  return { question, correctAnswer }
}

const playGame = () => {
  playGames(description, generateRound)
}

export default playGame
