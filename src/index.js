import BaseballGame from "./BaseBallGame.js";
import {checkInput,printResult,getRandomNumbers} from "./additionalFuctions.js";

let answerNumbers = getRandomNumbers();
document.querySelector('#game-restart-button').style.display = 'none';

console.log(answerNumbers);
const GameHandle = new BaseballGame();

document.querySelector('#submit').addEventListener('click', () => {
  const userInputString = document.querySelector('#user-input').value;
  let stringToPrint = '';
  if(checkInput(userInputString)){
    const userInputNumbers = [Number(userInputString[0]),Number(userInputString[1]),Number(userInputString[2])];
    stringToPrint = GameHandle.play(answerNumbers,userInputNumbers);
  }
  else
  {
    alert('입력값이 형식에 맞지 않습니다!');
    document.querySelector('#user-input').value = '';
  }
  printResult(stringToPrint);

});

document.querySelector('#game-restart-button').addEventListener('click', ()=>{
  answerNumbers = getRandomNumbers();
  document.querySelector('#game-restart-button').style.display = 'none';
  document.querySelector('#user-input').value = '';
  console.log(answerNumbers);
});
