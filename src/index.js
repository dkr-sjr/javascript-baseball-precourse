export default class BaseballGame {
  constructor(){
    this.answer = [0,0,0];
    this.initialization();
  }
  
  initialization(){
    for(let i =0 ; i < 3; i+=1)
      this.answer[i] = MissionUtils.Random.pickNumberInRange(1,9);
  }
  
  play(computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  }
}