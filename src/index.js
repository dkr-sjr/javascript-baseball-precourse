export default class BaseballGame {
  play(computerInputNumbers, userInputNumbers){
    let strikeCount = 0;
    let ballCount = 0;

    for(let i = 0 ; i < 3; i+=1){
      let result = this.compare(computerInputNumbers,userInputNumbers[i], i);
      if(result === 'strike')
        strikeCount+=1;
      else if(result === 'ball')
        ballCount+=1;
    }
    
    let output = '';
    if(ballCount !== 0)
      output += (ballCount.toString() + '볼'); 
    if(output !== '')
      output += ' ';
    if(strikeCount !==0)
      output += (strikeCount.toString() +'스트라이크')
    if(output ==='')
      output = '낫싱'

    return output;
  }

  compare(computerNumbers, userNumber, idx){
    for(let i =0; i < computerNumbers.length ; i+=1){
      if(computerNumbers[i] == userNumber && i === idx){
        return 'strike';
      }
      if(computerNumbers[i] == userNumber && i !== idx){
        return 'ball';
      }
    }
    return 'Nothing';
  }
}


let answerNumbers = [];
while(answerNumbers.length < 3){
  const randomNum = MissionUtils.Random.pickNumberInRange(1,9);
  if(answerNumbers.includes(randomNum))
    continue;
  answerNumbers.push(randomNum);
}
console.log(answerNumbers);
const GameHandle = new BaseballGame();

document.getElementById('submit').addEventListener('click', () => {
  const userInputString = document.getElementById('user-input').value;
  const digitNumber = Number(userInputString);
  let stringToPrint = '';
  if(Number.isInteger(digitNumber) && 111 <= digitNumber && digitNumber <= 999){
    const userInputNumbers = [Number(userInputString[0]),Number(userInputString[1]),Number(userInputString[2])];
    stringToPrint = GameHandle.play(answerNumbers,userInputNumbers);
  }
  else
  {

  }
  console.log(stringToPrint);

});
