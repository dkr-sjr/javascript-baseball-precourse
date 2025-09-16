/* global MissionUtils */
export default class BaseballGame {
  #answerNumbers = [];

  #userNumbers = [];

  #strikeCount = 0;

  #ballCount = 0;

  #result = '';

  /** @type {(string) => bool} */
  play(userInput) {
    if (this.#convertInput(userInput) === false) {
      return false;
    }

    this.#compareUserNumberWithAnswerNumbers();
    this.#makeResult();
    return true;
  }

  /** @type {{() => void}} */
  setRandomAnswers() {
    while (this.#answerNumbers.length < 3) {
      const randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.#answerNumbers.includes(randomNum)) {
        this.#answerNumbers.push(randomNum);
      }
    }
  }

  /** @type { () => string} */
  getResult() {
    return this.#result;
  }

  /** @type {() => void} */
  #compareUserNumberWithAnswerNumbers() {
    this.#ballCount = 0;
    this.#strikeCount = 0;

    this.#userNumbers.forEach((number, position) => {
      if (number === this.#answerNumbers[position]) {
        this.#strikeCount += 1;
      } else if (this.#answerNumbers.includes(number)) {
        this.#ballCount += 1;
      }
    });
  }

  /** @type {() => void} */
  #makeResult() {
    this.#result = '';

    if (this.#ballCount !== 0) {
      this.#result += `${this.#ballCount}볼 `;
    }
    if (this.#strikeCount !== 0) {
      this.#result += `${this.#strikeCount}스트라이크`;
    }
    if (this.#result === '') {
      this.#result = '낫싱';
    }
  }

  /** @type {(string) => bool} */
  #convertInput(userInput) {
    let digitNumber = Number(userInput);

    if (!Number.isInteger(digitNumber) || digitNumber < 111 || digitNumber > 999) {
      return false;
    }

    this.#userNumbers = [];
    while (digitNumber !== 0) {
      const onePlace = digitNumber % 10;
      digitNumber = Math.floor(digitNumber / 10);
      if (this.#userNumbers.includes(onePlace)) {
        return false;
      }
      this.#userNumbers.unshift(onePlace);
    }

    return true;
  }
}
