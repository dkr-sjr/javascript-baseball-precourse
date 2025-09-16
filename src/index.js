// eslint-disable-next-line import/extensions
import BaseballGame from './BaseballGame.js';
// eslint-disable-next-line import/extensions
import GameView from './GameView.js';

const baseballGame = new BaseballGame();
baseballGame.setRandomAnswers();
GameView.ToggleGameRestartButton(false);

document.querySelector('#submit').addEventListener('click', () => {
  const userInput = document.querySelector('#user-input').value;
  let gameResult = '';
  if (baseballGame.play(userInput) === true) {
    gameResult = baseballGame.getResult();
  } else {
    GameView.alertMessage('입력값이 형식에 맞지 않습니다!');
    GameView.ClearUserInputText();
  }

  if (gameResult === '3스트라이크') {
    gameResult = '축하합니다!\n정답을 맞추셨습니다!';
  }
  GameView.showResult(gameResult);
  GameView.ToggleGameRestartButton(true);
});

document.querySelector('#game-restart-button').addEventListener('click', () => {
  baseballGame.setRandomAnswers();
  GameView.ToggleGameRestartButton(false);
  GameView.ClearUserInputText();
  GameView.showResult('');
});
