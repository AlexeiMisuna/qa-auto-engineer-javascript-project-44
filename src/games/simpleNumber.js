/* eslint-disable import/prefer-default-export */
/* eslint-disable no-plusplus */
import helpers from '../helpers/index.js';

export const isSimpleNumber = () => {
  helpers.greeting(helpers.greetMessage);
  console.log(helpers.rules.simpleNumber);

  for (let i = 0; i < 3; i++) {
    const numberForQuestion = helpers.getRandomNumber(1, 100);
    console.log(`Question: ${numberForQuestion}`);
    const answer = helpers.getAnswer();

    const isSimple = (number) => {
      if (number <= 1) return false;
      if (number === 2) return true;
      if (helpers.isEven(number)) return false;

      for (let a = 3; i * a <= number; a += 2) {
        if (number % i === 0) return false;
      }
      return true;
    };

    const correctAnswer = isSimple(numberForQuestion) ? 'yes' : 'no';
    switch (answer) {
      case correctAnswer:
        console.log(helpers.rules.correctAnswer);
        break;
      case 'yes':
      case 'no':
        console.log(`'${answer}${helpers.rules.uncorrectAnswer}${correctAnswer}'.`);
        helpers.tryAgain();
        return;
      default:
        console.log(`${answer}${helpers.rules.uncorrectAnswer}'yes' or 'no'.`);
        return;
    }
  }
  helpers.victoryMessage();
};
