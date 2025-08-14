import helpers from '../helpers/helpers.js'
import { playGames } from '../index.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

const generateRound = () => {
  const numberForQuestion = helpers.getRandomNumber(1, 100)
  const question = `Question: ${numberForQuestion}`
  const correctAnswer = helpers.isEven(numberForQuestion) ? 'yes' : 'no'
  return { question, correctAnswer }
}

const playGame = () => {
  playGames(description, generateRound)
}

export default playGame