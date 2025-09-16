/* global MissionUtils */

/** @type {(string) => bool} */
export const checkInput = (inInput) => {
  let digitNumber = Number(inInput);
  if (!Number.isInteger(digitNumber) || digitNumber < 111 || digitNumber > 999) {
    return false;
  }
  const usedDigits = [];
  while (digitNumber !== 0) {
    const onePlace = digitNumber % 10;
    digitNumber = Math.floor(digitNumber / 10);
    if (usedDigits.includes(onePlace)) {
      return false;
    }
    usedDigits.push(onePlace);
  }
  return true;
};

/** @type {(string) => } */
export const printResult = (playResult) => {
  let stringToPrint = playResult;
  if (playResult === '3스트라이크') {
    stringToPrint = '축하합니다!\n정답을 맞추셨습니다!';
    document.querySelector('#game-restart-button').style.display = 'block';
  }
  document.querySelector('#result').textContent = stringToPrint;
};

/** @type {{() => number[]}} */
export const getRandomNumbers = () => {
  const output = [];

  while (output.length < 3) {
    const randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!output.includes(randomNum)) {
      output.push(randomNum);
    }
  }
  return output;
};
