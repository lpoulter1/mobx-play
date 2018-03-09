import { action, extendObservable } from "mobx";
import Player from "./Player";

class PlayerStore {
  constructor() {
    extendObservable(this, {
      players: [],
      addPlayer: action(options => this.players.push(new Player(options)))
    });
  }
}

export default new PlayerStore();
