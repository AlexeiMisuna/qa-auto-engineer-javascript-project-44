
import readlineSync from 'readline-sync'
import greeting from '../cli.js'
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const playGames = (description, generateRound) => {
  const name = greeting()
  console.log(description)
  for (let i = 0; i < 3; i++) {
    const { question, correctAnswer } = generateRound()
    console.log(question)
    const answer = readlineSync.question('Your answer: ')
    if (answer === correctAnswer) {
      console.log('Correct!')
    }
    else {
      console.log(`${answer} is wrong answer ;(.Correct answer was ${correctAnswer}`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }
  console.log(`Congratulations, ${name}!`)
}

export default {
  getRandomNumber,
  playGames,
}