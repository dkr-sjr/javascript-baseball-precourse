// @ts-check
// eslint-disable-next-line import/extensions
import BaseballGame from './BaseballGame.js';
// eslint-disable-next-line import/extensions
import { checkInput, printResult, getRandomNumbers } from './additionalFunctions.js';

/** @type {number[]} */
let answerNumbers = getRandomNumbers();

/** @type {HTMLElement | null} */
const gameRestartButton = document.querySelector('#game-restart-button');
if (gameRestartButton) {
  gameRestartButton.style.display = 'none';
}

/** @type {HTMLElement} */
(document.querySelector('#submit')).addEventListener('click', () => {
  /** @type {string} */
  const userInputString = /** @type {HTMLInputElement} */ (document.querySelector('#user-input')).value;

  /** @type {string} */
  let playResult = '';
  if (checkInput(userInputString)) {
    /** @type {number[]} */
    const userInputNumbers = [...userInputString].map(Number);
    playResult = BaseballGame.play(answerNumbers, userInputNumbers);
  } else {
    /* eslint-disable no-alert */
    alert('입력값이 형식에 맞지 않습니다!');
    /* eslint-enable no-alert */
    /** @type {HTMLInputElement} */(document.querySelector('#user-input')).value = '';
  }
  printResult(playResult);
});

/** @type {HTMLElement} */
(document.querySelector('#game-restart-button')).addEventListener('click', () => {
  answerNumbers = getRandomNumbers();
  /** @type {HTMLElement} */
  (document.querySelector('#game-restart-button')).style.display = 'none';
  /** @type {HTMLInputElement} */
  (document.querySelector('#user-input')).value = '';
  printResult('');
});
