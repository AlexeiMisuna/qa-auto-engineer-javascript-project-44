import { getRandom } from '../helpers/helpers.js'
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
  const start = getRandom(1, 10)
  const step = getRandom(1, 5)
  const length = getRandom(5, 10)
  const progression = buildProgression(start, step, length)
  const hiddenElementIndex = getRandom(0, progression.length - 1)
  const correctAnswer = String(progression[hiddenElementIndex])
  progression[hiddenElementIndex] = '..'
  const question = `${progression.join(' ')}`
  return { question, correctAnswer }
}

const playGame = () => {
  playGames(description, generateRound)
}

export default playGame
