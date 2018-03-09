import React from "react";
import { observer, inject } from "mobx-react";

class AddPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addingPlayer: false,
      name: "",
      chips: 0,
      seat: 0
    };
  }

  handleAddPlayer = () => {
    const { chips, name, seat } = this.state;
    this.props.playerStore.addPlayer({ chips, name, seat });
    this.setState({ addingPlayer: false });
  };

  handleChangeName = ({ target }) => this.setState({ name: target.value });
  handleChangeChips = ({ target }) => this.setState({ chips: target.value });
  handleChangeSeat = ({ target }) => this.setState({ seat: target.value });

  showAddPlayerInput = () => this.setState({ addingPlayer: true });

  render() {
    const { addingPlayer, name, chips, seat } = this.state;

    return (
      <div>
        <button onClick={this.showAddPlayerInput}>Add Player</button>

        {addingPlayer && (
          <React.Fragment>
            <input
              type="text"
              onChange={this.handleChangeName}
              value={name}
              placeholder="Name"
            />
            <input
              type="number"
              onChange={this.handleChangeChips}
              value={chips}
              placeholder="Chips"
            />
            <input
              type="number"
              onChange={this.handleChangeSeat}
              value={seat}
              placeholder="Seat"
            />
            <button
              disabled={!(name && chips && seat)}
              onClick={this.handleAddPlayer}
            >
              Confirm
            </button>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default inject("playerStore")(observer(AddPlayer));
