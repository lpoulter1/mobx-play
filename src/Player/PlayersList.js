import React from "react";
import { observer, inject } from "mobx-react";

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

export default PlayersList;
