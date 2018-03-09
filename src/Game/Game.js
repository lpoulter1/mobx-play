import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import seedPlayers from "../helpers/seedPlayers";

class Game extends Component {
  constructor(props) {
    super(props);
    seedPlayers.map(player => this.props.playerStore.addPlayer(player));
  }

  render() {
    return <div className="App">{this.props.children}</div>;
  }
}

export default inject("playerStore")(observer(Game));
