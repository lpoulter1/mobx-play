import { action, extendObservable } from "mobx";
import Hand from "./Hand";
import Player from "../Player/Player";

class uiStore {
  constructor() {
    extendObservable(this, {
      players: [],
      hand: new Hand(),
      addPlayer: action(options => this.players.push(new Player(options))),
      get smallBlindPosition() {
        return (this.hand.dealerPosition + 1) % this.players.length;
      },
      get bigBlindPosition() {
        return (this.hand.dealerPosition + 2) % this.players.length;
      },
      get positionToAct() {
        if (this.hand.round === "deal") {
          return (this.bigBlindPosition + 1) % this.players.length;
        }
      },
      start: action(() => {
        this.players[this.smallBlindPosition].addBet(
          1 / 2 * this.hand.bigBlind
        );
        this.players[this.bigBlindPosition].addBet(this.hand.bigBlind);
        this.hand.round = "deal";
      })
    });
  }
}

export default new uiStore();
