export const checkInput = (inInput) =>{
  let digitNumber = Number(inInput);
  if(!Number.isInteger(digitNumber) || 111 > digitNumber || digitNumber > 999){
    return false;
  }
  let set = [];
  while(digitNumber !== 0)
  {
    const onePlace = digitNumber%10;
    digitNumber = Math.floor(digitNumber/ 10);
    if(set.includes(onePlace)){
      return false;
    }
    set.push(onePlace);
  }
  return true;
};

export const printResult = (stringToPrint) =>{
  if(stringToPrint === '3스트라이크'){
    stringToPrint = '축하합니다!\n정답을 맞추셨습니다!'
    document.querySelector('#game-restart-button').style.display = 'block';
  }
  document.querySelector('#result').textContent = stringToPrint;
};

export const getRandomNumbers = ()=>{
  let output = [];
  
  while(output.length < 3){
    const randomNum = MissionUtils.Random.pickNumberInRange(1,9);
    if(output.includes(randomNum))
      continue;
    output.push(randomNum);
  }
  return output;
};
