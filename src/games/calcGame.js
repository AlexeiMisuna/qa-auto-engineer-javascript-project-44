// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import helpers from '../helpers/index.js'
import { evaluate } from 'mathjs'

export const calculatorGame = () => {
  const name = helpers.greeting(helpers.greetMessage)
  console.log(helpers.rules.calculatorGame)

  for (let i = 0; i < 3; i++) {
    const firsOperand = helpers.getRandomNumber(1, 100)
    const secondOperand = helpers.getRandomNumber(1, 100)
    const getRandomOperator = () => {
      const operators = ['+', '-']
      const randomIndex = Math.floor(Math.random() * operators.length)
      return operators[randomIndex]
    }
    const operator = getRandomOperator()
    console.log(`Question: ${firsOperand} ${operator} ${secondOperand}`)
    const answer = helpers.getAnswer()
    const numericAnswer = Number(answer)
    const correctAnswer = evaluate(`${firsOperand} ${operator} ${secondOperand}`)
    if (numericAnswer === correctAnswer) {
      console.log(helpers.rules.correctAnswer)
    }
    else {
      console.log(`'${answer}${helpers.rules.uncorrectAnswer}${correctAnswer}'.`)
      helpers.tryAgain()
      return
    }
  }
  helpers.victoryMessage()
}
