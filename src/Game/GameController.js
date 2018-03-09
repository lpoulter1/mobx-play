import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import seedPlayers from "../helpers/seedPlayers";

class GameController extends Component {
  constructor(props) {
    super(props);
    seedPlayers.map(player => this.props.uiStore.addPlayer(player));
    this.props.uiStore.start();
  }

  render() {
    return (
      <div className="App">
        <p>Game Info: </p>
        <p>SB: Seat:{this.props.uiStore.smallBlindPosition}</p>
        <p>BB: Seat:{this.props.uiStore.bigBlindPosition}</p>
        <p>Player to Act: Seat:{this.props.uiStore.positionToAct}</p>
        {this.props.children}
      </div>
    );
  }
}

export default inject("playerStore", "uiStore")(observer(GameController));
