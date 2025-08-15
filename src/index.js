import readlineSync from 'readline-sync'
import greet from './cli.js'

const roundsCount = 3

export const playGames = (description, generateRound) => {
  const name = greet()
  console.log(description)
  for (let i = 0; i < roundsCount; i++) {
    const { question, correctAnswer } = generateRound()
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')
    if (userAnswer !== correctAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`)
      console.log(`Let's try again, ${name}!`)
      return
    }
    console.log('Correct!')
  }
  console.log(`Congratulations, ${name}!`)
}
