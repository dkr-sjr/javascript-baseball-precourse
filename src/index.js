// eslint-disable-next-line import/extensions
import BaseballGame from './BaseballGame.js';
// eslint-disable-next-line import/extensions
import GameView from './GameView.js';
// eslint-disable-next-line import/extensions
import { checkInput, printResult, getRandomNumbers } from './additionalFunctions.js';

let answerNumbers = getRandomNumbers();

GameView.ToggleGameRestartButton(false);

document.querySelector('#submit').addEventListener('click', () => {
  const userInputString = document.querySelector('#user-input').value;

  let playResult = '';
  if (checkInput(userInputString)) {
    const userInputNumbers = [...userInputString].map(Number);
    playResult = BaseballGame.play(answerNumbers, userInputNumbers);
  } else {
    GameView.alertMessage('입력값이 형식에 맞지 않습니다!');
    GameView.ClearUserInputText();
  }
  printResult(playResult);
});

document.querySelector('#game-restart-button').addEventListener('click', () => {
  answerNumbers = getRandomNumbers();
  GameView.ToggleGameRestartButton(false);
  GameView.ClearUserInputText();
  GameView.showResult('');
});
