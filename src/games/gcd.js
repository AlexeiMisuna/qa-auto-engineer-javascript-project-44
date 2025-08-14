import helpers from '../helpers/index.js'
const playGcdGame = () => {
  const description = 'Find the greatest common divisor of given numbers.'
  const generateGcdRound = () => {
    const firstNumber = helpers.getRandomNumber(1, 100)
    const secondNumber = helpers.getRandomNumber(1, 100)
    const getGcd = (num1, num2) => {
      while (num2 !== 0) {
        const temp = num2
        num2 = num1 % num2
        num1 = temp
      }
      return num1
    }
    const question = `Question: ${firstNumber} ${secondNumber}`
    const correctAnswer = getGcd(firstNumber, secondNumber).toString()
    return { question, correctAnswer }
  }
  helpers.playGames(description, generateGcdRound)
}
export default playGcdGame
