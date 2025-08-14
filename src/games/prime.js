import helpers from '../helpers/helpers.js'
import { playGames } from '../index.js'
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'
const isSimple = (number) => {
  if (number <= 1) return false
  if (number === 2) return true
  if (helpers.isEven(number)) return false
  for (let a = 3; a * a <= number; a += 2) {
    if (number % a === 0) return false
  }
  return true
}
const generateRound = () => {
  const numberForQuestion = helpers.getRandomNumber(1, 100)
  const question = `Question: ${numberForQuestion}`
  const correctAnswer = isSimple(numberForQuestion) ? 'yes' : 'no'
  return { question, correctAnswer }
}
const playGame = () => {
  playGames(description, generateRound)
}
export default playGame
