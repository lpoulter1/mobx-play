import { action, extendObservable } from "mobx";

class Hand {
  constructor() {
    extendObservable(this, {
      bigBlind: 2,
      round: "idle",
      dealerPosition: 0,
      positionToAct: 0,
      pot: 0,
      communityCards: []
    });
  }
}

export default Hand;
