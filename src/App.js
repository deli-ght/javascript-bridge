const BridgeGame = require("./BridgeGame");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const { printStartMessage } = require("./OutputView");
const { validateBridgeNumber } = require("./Validation");

class App {
  constructor() {
    this.inputView = Object.create(InputView);
    this.outputView = Object.create(OutputView);
    this.game = null;
  }

  play() {
    printStartMessage();
    this.inputView.readBridgeSize(this.handleBridgeSize.bind(this));
  }

  handleBridgeSize(length) {
    validateBridgeNumber(length);
    this.game = new BridgeGame(this.inputView, this.outputView, +length);
    this.inputView.readMoving();
  }
}

const app = new App();
app.play();
module.exports = App;
