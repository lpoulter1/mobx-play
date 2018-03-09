import React from "react";
import { observer, inject } from "mobx-react";
import ACTIONS from "../helpers/actions";

class PlayerAction extends React.Component {
  constructor(props) {
    super(props);
    this.handleAction = this.handleAction.bind(this);
  }

  handleAction(action) {
    this.props.uiStore.players[0].fold();
  }

  render() {
    return (
      <div>
        <button
          onClick={this.handleAction.bind(null, ACTIONS.FOLD)}
          placeholder="Name"
        >
          Fold
        </button>
      </div>
    );
  }
}

export default inject("uiStore")(observer(PlayerAction));
