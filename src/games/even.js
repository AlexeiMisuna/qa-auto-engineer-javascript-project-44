
import helpers from '../helpers/index.js'

const playEvenGame = () => {
  const isEven = number => number % 2 === 0
  const description = 'Answer \'yes\' if the number is prime, otherwise answer \'no\'.';
  const generateEvenRound = () => {
    const numberForQuestion = helpers.getRandomNumber(1, 100)
    const question = `Question: ${numberForQuestion}`
    const correctAnswer = isEven(numberForQuestion) ? 'yes' : 'no'
    return { question, correctAnswer }
  }
  helpers.playGames(description, generateEvenRound)
}
export default playEvenGame