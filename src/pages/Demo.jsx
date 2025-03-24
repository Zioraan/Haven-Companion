// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React from "react";
import { CurrentDeck } from "../components/CurrentDeck.jsx";
import { useMonsterModifierLib } from "../components/monsterModifierLib.jsx";
import { AttackDrawModal } from "../components/AttackDrawModal.jsx";
import { PlayerCard, PlayerCardMinimized } from "../components/PlayerCard.jsx";

export const Demo = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer();

  return (
    <div>
      {store.players.map((player, index) =>
        !player.minimized ? (
          <PlayerCard key={index} player={player} />
        ) : (
          <PlayerCardMinimized key={index} player={player} />
        )
      )}
    </div>
  );
};
