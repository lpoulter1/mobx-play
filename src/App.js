import React, { Component } from "react";
import { Provider } from "mobx-react";
import PlayerStore from "./Player/PlayerStore";
import UiStore from "./Game/UiStore";
import AddPlayer from "./Player/AddPlayer";
import PlayerAction from "./Player/PlayerAction";
import PlayersList from "./Player/PlayersList";
import GameController from "./Game/GameController";
import "./App.css";

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
