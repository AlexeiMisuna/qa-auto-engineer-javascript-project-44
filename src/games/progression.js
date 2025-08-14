import helpers from '../helpers/index.js'

const playProgressionGame = () => {
  const description = 'What number is missing in the progression?'
  const generateProgressionRound = () => {
    const buildProgression = (start, step, length) => {
      const progression = []
      for (let a = 0; a < length; a++) {
        progression.push(start + a * step)
      }
      return progression
    }
    const progressionStart = helpers.getRandomNumber(1, 10)
    const progressionStep = helpers.getRandomNumber(1, 5)
    const progressionLength = helpers.getRandomNumber(5, 10)
    const progression = buildProgression(progressionStart, progressionStep, progressionLength)
    const hiddenElementIndex = helpers.getRandomNumber(0, progressionLength - 1)
    const correctAnswer = progression[hiddenElementIndex].toString()
    progression[hiddenElementIndex] = '..'
    const question = `Question: ${progression.join(' ')}`
    return { question, correctAnswer }
  }
  helpers.playGames(description, generateProgressionRound)
}
export default playProgressionGame
