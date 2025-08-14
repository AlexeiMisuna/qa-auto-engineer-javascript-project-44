import helpers from '../helpers/index.js'

const playPrimeGame = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'
  const isEven = number => number % 2 === 0
  const generatePrimeRound = () => {
    const isSimple = (number) => {
      if (number <= 1) return false
      if (number === 2) return true
      if (isEven(number)) return false
      for (let a = 3; a * a <= number; a += 2) {
        if (number % a === 0) return false
      }
      return true
    }
    const numberForQuestion = helpers.getRandomNumber(1, 100)
    const question = `Question: ${numberForQuestion}`
    const correctAnswer = isSimple(numberForQuestion) ? 'yes' : 'no'
    return { question, correctAnswer }
  }
  helpers.playGames(description, generatePrimeRound)
}
export default playPrimeGame