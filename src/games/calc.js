import helpers from '../helpers/index.js'
const playCalcGame = () => {
  const description = 'What is the result of the expression?'
  const generateCalcRound = () => {
    const firstNumber = helpers.getRandomNumber(1, 10)
    const secondNumber = helpers.getRandomNumber(1, 10)
    const getRandomElement = (arr) => {
      const randomIndex = Math.floor(Math.random() * arr.length)
      return arr[randomIndex]
    }
    const operators = ['+', '-', '*']
    const operator = getRandomElement(operators)
    const question = `Question: ${firstNumber} ${operator} ${secondNumber}`
    let correctAnswer
    switch (operator) {
      case '+':
        correctAnswer = (firstNumber + secondNumber).toString()
        break
      case '-':
        correctAnswer = (firstNumber - secondNumber).toString()
        break
      case '*':
        correctAnswer = (firstNumber * secondNumber).toString()
        break
    }
    return { question, correctAnswer }
  }
  helpers.playGames(description, generateCalcRound)
}
export default playCalcGame
