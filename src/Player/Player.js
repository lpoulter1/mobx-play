import { action, extendObservable } from "mobx";
import ACTIONS from "../helpers/actions";

class Player {
  constructor({ name, seat, chips }) {
    extendObservable(this, {
      name,
      seat,
      chips,
      lastBet: 0,
      lastAction: "",
      hasActedForRound: false,
      get foldedOrAllIn() {
        return (
          this.lastAction === ACTIONS.FOLD || this.lastAction === ACTIONS.ALL_IN
        );
      },
      fold: action(() => {
        console.log("folding player");
        this.lastAction = ACTIONS.FOLD;
      }),
      callOrCheck: action(currentPriceToCall => {
        this.addBet(currentPriceToCall);

        let diff = currentPriceToCall - this.lastBet;
        if (diff > 0) {
          return (this.lastAction = ACTIONS.CALL);
        }

        return (this.lastAction = ACTIONS.CHECK);
      }),
      raise: action(amount => {
        this.lastAction = ACTIONS.RAISE;
        this.addBet(amount);
      }),
      addBet: action(amount => {
        const extra = amount - this.lastBet;
        if (this.chips < extra) {
          return "error - not enough chips";
        }
        this.chips -= extra;
        this.lastBet = amount;
      }),
      print: () => console.log(this),
      reset: () => {
        this.lastBet = 0;
        this.lastAction = "";
        this.hasActedForRound = false;
      }
    });
  }
}

export default Player;
