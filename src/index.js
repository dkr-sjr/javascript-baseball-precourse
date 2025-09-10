export default class BaseballGame {
  play(computerInputNumbers, userInputNumbers){
    let strike = 0;
    let ball = 0;

    for(let i = 0 ; i < 3; i+=1){
      
    }

    return "결과 값 String";
  }

  compare(computerInputNumbers, userInputNumber, idx){
    for(let i =0; i < computerInputNumbers.length ; i+=1){
      if(computerInputNumbers[i] === userInputNumber && i === idx){
        return 'strike';
      }
      if(computerInputNumbers[i] === userInputNumber && i !== idx){
        return 'ball';
      }
    }
    return 'Nothing';
  }
}