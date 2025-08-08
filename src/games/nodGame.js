
import helpers from '../helpers/index.js'

export const greatestCommonDivisor = () => {
  const name = helpers.greeting(helpers.greetMessage)
  console.log(helpers.rules.nodGame)

  for (let i = 0; i < 3; i++) {
    const firsRandomNumber = helpers.getRandomNumber(1, 100)
    const secondRandomNubmer = helpers.getRandomNumber(1, 100)
    let num1, num2
    const gcd = (num1, num2) => {
      while (num2 !== 0) {
        const temp = num2
        num2 = num1 % num2
        num1 = temp
      }
      return num1
    }
    console.log(`Question: ${firsRandomNumber} ${secondRandomNubmer}`)
    const correctAnswer = gcd(firsRandomNumber, secondRandomNubmer)
    const answer = helpers.getAnswer()
    const numericAnswer = Number(answer)
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
