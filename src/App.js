import React, { Component } from "react";
import { Provider, observer, inject } from "mobx-react";
import PlayerStore from "./Player/PlayerStore";
import UiStore from "./Game/UiStore";
import AddPlayer from "./Player/AddPlayer";
import PlayerAction from "./Player/PlayerAction";
import GameController from "./Game/GameController";
import "./App.css";

const PlayersList = inject("uiStore")(
  observer(({ uiStore }) =>
    uiStore.players.map(player => (
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
      <Provider playerStore={PlayerStore} uiStore={UiStore}>
        <GameController>
          <PlayersList />
          <AddPlayer />
          <PlayerAction />
        </GameController>
      </Provider>
    );
  }
}

export default App;
