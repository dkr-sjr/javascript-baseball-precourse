export default class BaseballGame {
  /** @type {(number, number) => string} */
  static play(computerInputNumbers, userInputNumbers) {
    let strikeCount = 0;
    let ballCount = 0;

    for (let i = 0; i < 3; i += 1) {
      const result = this.compareNumberWithAnswers(computerInputNumbers, userInputNumbers[i], i);
      if (result === 'strike') {
        strikeCount += 1;
      } else if (result === 'ball') {
        ballCount += 1;
      }
    }
    return this.makeResult(strikeCount, ballCount);
  }

  /** @type {(number[],number,number) => string} */
  static compareNumberWithAnswers(computerNumbers, userNumber, position) {
    for (let i = 0; i < computerNumbers.length; i += 1) {
      if (computerNumbers[i] === userNumber && i === position) {
        return 'strike';
      }
      if (computerNumbers[i] === userNumber && i !== position) {
        return 'ball';
      }
    }
    return 'nothing';
  }

  /** @type {(number,number) => string} */
  static makeResult(strikeCount, ballCount) {
    let output = '';
    if (ballCount !== 0) {
      output += `${ballCount}볼 `;
    }
    if (strikeCount !== 0) {
      output += `${strikeCount}스트라이크`;
    }
    if (output === '') {
      output = '낫싱';
    }
    return output;
  }
}
