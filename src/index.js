import readlineSync from 'readline-sync'
import greet from './cli.js'

export const playGames = (description, generateRound) => {
  const name = greet()
  console.log(description)
  const numberOfRounds = 3
  for (let i = 0; i < numberOfRounds; i++) {
    const { question, correctAnswer } = generateRound()
    console.log(question)
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
