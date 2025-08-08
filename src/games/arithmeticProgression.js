/* eslint-disable semi */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-plusplus */
import helpers from '../helpers/index.js'

export const arithmeticProgression = () => {
  helpers.greeting(helpers.greetMessage)
  console.log(helpers.rules.arithmeticProgression)

  for (let i = 0; i < 3; i++) {
    const progressionStart = helpers.getRandomNumber(1, 10)
    const progressionStep = helpers.getRandomNumber(1, 5)
    const progressionLength = helpers.getRandomNumber(5, 10)

    const generateProgression = (start, step, length) => {
      const progression = []

      for (let a = 0; a < length; a++) {
        progression.push(start + a * step)
      }

      return progression
    }
    const progression = generateProgression(progressionStart, progressionStep, progressionLength)

    const hiddenElementIndex = helpers.getRandomNumber(0, progressionLength - 1)
    const correctAnswer = progression[hiddenElementIndex]
    progression[hiddenElementIndex] = '..'

    console.log(`Question: ${progression.join(' ')}`)

    const answer = helpers.getAnswer()
    if (Number(answer) === correctAnswer) {
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
