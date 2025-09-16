export default class GameView {
  /** @type { (bool) => void } */
  static ToggleGameRestartButton(shouldShow) {
    const gameRestartButton = document.querySelector('#game-restart-button');

    if (shouldShow === true) {
      gameRestartButton.style.display = 'none';
    } else if (shouldShow === false) {
      gameRestartButton.style.display = 'block';
    }
  }

  /** @type {() => void} */
  static ClearUserInputText() {
    document.querySelector('#user-input').value = '';
  }

  /** @type {(string) => void} */
  static alertMessage(Message) {
    /* eslint-disable no-alert */
    alert(Message);
    /* eslint-enable no-alert */
  }

  /** @type {(string) => void} */
  static showResult(result) {
    document.querySelector('#result').value = result;
  }
}
