/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-return */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { random } from 'mathjs'
import helpers from '../helpers/index.js'

export const arithmeticProgression = () => {
  const name = helpers.greeting(helpers.greetMessage)
  console.log(helpers.rules.arithmeticProgression)
  for (let i = 0; i < 3; i++) {
    const progressionStart = helpers.getRandomNumber(1, 5)
    const progressionLength = helpers.getRandomNumber(5, 10)
    const progressionStep = helpers.getRandomNumber(2, 5)

    const generateArithmeticProgression = (start, count, step) => {
      const progression = []
      for (let i = 0; i < count; i++) {
        const currentElement = start + i * step
        progression.push(currentElement)
      }
      return progression
    }
    const numberForQuestion = generateArithmeticProgression(progressionStart, progressionLength, progressionStep)

    const getRandomElementFromArray = (array) => {
      if (array.length === 0) {
        return null
      }
      const randomIndex = Math.floor(Math.random() * array.length)
      const originalValue = array[randomIndex]
      array[randomIndex] = '..'
      return originalValue
    }
    const randomIndex = Math.floor(Math.random() * numberForQuestion.length)
    const correctAnswer = getRandomElementFromArray(numberForQuestion)
    console.log(`Question: ${numberForQuestion}`)
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
