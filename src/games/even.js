import { getRandom } from '../helpers/helpers.js'
import { playGames } from '../index.js'

const isEven = number => number % 2 === 0
const description = 'Answer "yes" if the number is even, otherwise answer "no".'

const generateRound = () => {
  const number = getRandom(1, 100)
  const question = `${number}`
  const correctAnswer = isEven(number) ? 'yes' : 'no'
  return { question, correctAnswer }
}

const playGame = () => {
  playGames(description, generateRound)
}

export default playGame
