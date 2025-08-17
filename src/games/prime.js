import { getRandom } from '../helpers/helpers.js'
import { playGames } from '../index.js'

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const isPrime = (number) => {
  if (number <= 1) return false
  if (number === 2) return true
  if (number % 2 === 0) return false

  const maxDivisor = Math.sqrt(number)
  for (let a = 3; a <= maxDivisor; a += 2) {
    if (number % a === 0) return false
  }
  return true
}

const generateRound = () => {
  const number = getRandom(1, 100)
  const question = `${number}`
  const correctAnswer = isPrime(number) ? 'yes' : 'no'
  return { question, correctAnswer }
}

const playGame = () => {
  playGames(description, generateRound)
}

export default playGame
