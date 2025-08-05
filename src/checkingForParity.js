// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import helpers from './helpers/index.js'

export const checkingForParity = () => {
  const isEven = number => number % 2 === 0
  const name = helpers.greeting(helpers.greetMessage)
  console.log(helpers.rules.checkingForParity)

  for (let i = 0; i < 3; i++) {
    const numberForQuestion = helpers.getRandomNumber(1, 100)
    console.log(`Question: ${numberForQuestion}`)
    const answer = helpers.getAnswer()
    const correctAnswer = isEven(numberForQuestion) ? 'yes' : 'no'

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
