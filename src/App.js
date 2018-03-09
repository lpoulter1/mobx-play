import React, { Component } from "react";
import { Provider, observer, inject } from "mobx-react";
import PlayerStore from "./Player/PlayerStore";
import AddPlayer from "./Player/AddPlayer";
import PlayerAction from "./Player/PlayerAction";
import Game from "./Game/Game";
import "./App.css";

const PlayersList = inject("playerStore")(
  observer(({ playerStore }) =>
    playerStore.players.map(player => (
      <div key={player.name}>
        name: {player.name}: chips:{player.chips}: seat:{player.seat}:
        foldedOrAllIn:{player.foldedOrAllIn}
      </div>
    ))
  )
);

class App extends Component {
  render() {
    return (
      <Provider playerStore={PlayerStore}>
        <Game>
          <PlayersList />
          <AddPlayer />
          <PlayerAction />
        </Game>
      </Provider>
    );
  }
}

export default App;
