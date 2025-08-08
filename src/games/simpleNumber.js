/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-return */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { random } from 'mathjs'
import helpers from '../helpers/index.js'


export const isSimpleNumber = () => {
  const name = helpers.greeting(helpers.greetMessage)
  console.log(helpers.rules.simpleNumber)
  for (let i = 0; i < 3; i++) {
    const numberForQuestion = helpers.getRandomNumber(1, 100)
    console.log(`Question: ${numberForQuestion}`)
    const answer = helpers.getAnswer()

    const isSimple = (number) => {
      if (number <= 1) return false
      if (number === 2) return true
      if (helpers.isEven(number)) return false
      for (let i = 3; i <= Math.sqrt(number); i += 2) {
        if (number % i === 0) return false
      }
      return true
    }

    const correctAnswer = isSimple(numberForQuestion) ? 'yes' : 'no'
    switch (answer) {
      case correctAnswer:
        console.log(helpers.rules.correctAnswer)
        break
      case 'yes':
      case 'no':
        console.log(`'${answer}${helpers.rules.uncorrectAnswer}${correctAnswer}'.`)
        helpers.tryAgain()
        return
      default:
        console.log(`${answer}${helpers.rules.uncorrectAnswer}'yes' or 'no'.`)
        return
    }
  }
  helpers.victoryMessage()
}