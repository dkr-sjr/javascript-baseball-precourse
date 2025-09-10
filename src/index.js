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

const checkInput = (inInput) =>{
  let digitNumber = Number(inInput);
  if(!Number.isInteger(digitNumber) || 111 > digitNumber || digitNumber > 999)
    return false;
  
  let set = [];
  while(digitNumber !== 0)
  {
    const tmp = digitNumber%10;
    digitNumber = Math.floor(digitNumber/ 10);
    if(set.includes(tmp)){
      return false;
    }
    set.push(tmp);
  }
  return true;
};

let answerNumbers = [];

while(answerNumbers.length < 3){
  const randomNum = MissionUtils.Random.pickNumberInRange(1,9);
  if(answerNumbers.includes(randomNum))
    continue;
  answerNumbers.push(randomNum);
}

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


});
