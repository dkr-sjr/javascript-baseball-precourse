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
      if(computerNumbers[i] === userNumber && i === idx){
        return 'strike';
      }
      if(computerNumbers[i] === userNumber && i !== idx){
        return 'ball';
      }
    }
    return 'Nothing';
  }
}