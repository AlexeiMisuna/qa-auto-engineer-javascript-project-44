import helpers from '../helpers/helpers.js'
import { playGames } from '../index.js'

const description = 'What number is missing in the progression?'

const buildProgression = (start, step, length) => {
  const progression = []
  for (let a = 0; a < length; a++) {
    progression.push(start + a * step)
  }
  return progression
}

const generateRound = () => {
  const start = helpers.getRandomNumber(1, 10)
  const step = helpers.getRandomNumber(1, 5)
  const length = helpers.getRandomNumber(5, 10)
  const progression = buildProgression(start, step, length)
  const hiddenElementIndex = helpers.getRandomNumber(0, length - 1)
  const correctAnswer = progression[hiddenElementIndex].toString()
  progression[hiddenElementIndex] = '..'
  const question = `Question: ${progression.join(' ')}`
  return { question, correctAnswer }
}

const playGame = () => {
  playGames(description, generateRound)
}

export default playGame