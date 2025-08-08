/* eslint-disable semi */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-plusplus */
/* eslint-disable default-case */
import helpers from '../helpers/index.js'

export const calculatorGame = () => {
  helpers.greeting(helpers.greetMessage)
  console.log(helpers.rules.calculatorGame)

  for (let i = 0; i < 3; i++) {
    const generateQuestion = () => {
      const number1 = helpers.getRandomNumber(1, 100)
      const number2 = helpers.getRandomNumber(1, 100)
      const operations = ['+', '-', '*']
      const randomIndex = Math.floor(Math.random() * operations.length)
      const operator = operations[randomIndex]

      const questionString = `Question: ${number1} ${operator} ${number2}`
      return {
        questionString, number1, number2, operator,
      }
    }

    const {
      questionString, number1, number2, operator,
    } = generateQuestion()
    console.log(questionString)

    const answer = helpers.getAnswer()
    const numericAnswer = Number(answer)

    let correctAnswer
    switch (operator) {
      case '+':
        correctAnswer = number1 + number2
        break
      case '-':
        correctAnswer = number1 - number2
        break
      case '*':
        correctAnswer = number1 * number2
        break
    }

    if (numericAnswer === correctAnswer) {
      console.log(helpers.rules.correctAnswer)
    } else {
      console.log(`'${answer}${helpers.rules.uncorrectAnswer}${correctAnswer}'.`)
      helpers.tryAgain()
      return
    }
  }
  helpers.victoryMessage()
}
