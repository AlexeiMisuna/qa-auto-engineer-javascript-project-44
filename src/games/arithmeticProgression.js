import helpers from '../helpers/index.js'

export const arithmeticProgression = () => {
  const name = helpers.greeting(helpers.greetMessage)
  console.log(helpers.rules.arithmeticProgression)

  for (let i = 0; i < 3; i++) {
    const progressionStart = helpers.getRandomNumber(1, 10)
    const progressionStep = helpers.getRandomNumber(1, 5)
    const progressionLength = helpers.getRandomNumber(5, 10)

    const generateProgression = (start, step, length) => {
      const progression = []

      for (let i = 0; i < length; i++) {
        progression.push(start + i * step)
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
