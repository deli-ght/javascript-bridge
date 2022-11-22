const { Console } = require("@woowacourse/mission-utils");

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printStartMessage() {
    Console.print("다리 건너기 게임을 시작합니다.\n");
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(count, result, answer) {
    const upBridge = [];
    const downBridge = [];

    answer.slice(0, count).forEach((element, index) => {
      if (index === count && !result && element === "U") {
        downBridge.push("X");
        upBridge.push(" ");
        return;
      }

      if (index === count && !result && element === "D") {
        upBridge.push("X");
        downBridge.push(" ");
        return;
      }

      if (element === "U") {
        upBridge.push("O");
        downBridge.push(" ");
        return;
      }

      if (element === "D") {
        downBridge.push("O");
        upBridge.push(" ");
        return;
      }
    });

    Console.print(`[ ${upBridge.join(" | ")} ]`);
    Console.print(`[ ${downBridge.join(" | ")} ]`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(result, gameCount) {
    Console.print(`게임 성공 여부: ${result ? "성공" : "실패"}`);
    Console.print(`총 시도한 횟수: ${gameCount}`);
  },
};

module.exports = OutputView;
