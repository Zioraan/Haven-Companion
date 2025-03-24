// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React from "react";
import { CurrentDeck } from "../components/CurrentDeck.jsx";
import { useMonsterModifierLib } from "../components/monsterModifierLib.jsx";
import { AttackDrawModal } from "../components/AttackDrawModal.jsx";

export const Demo = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer();
  const { addCurseOrBless, endRound } = useMonsterModifierLib();

  const handleAttackDraw = () => {
    dispatch({ type: "SET_ATTACK_HAPPENING", payload: !store.attackHappening });
  };

  return (
    <div className="container">
      <div className="text-center mt-5">
        <input
          type="button"
          className="btn btn-primary"
          value="Draw Attack"
          onClick={() => handleAttackDraw()}
        />
        <input
          type="button"
          className="btn btn-primary"
          value="Add Bless"
          onClick={() => addCurseOrBless("bless")}
        />
        <input
          type="button"
          className="btn btn-primary"
          value="Add Curse"
          onClick={() => addCurseOrBless("curse")}
        />
        <input
          type="button"
          className="btn btn-primary"
          value="End Round"
          onClick={() => endRound()}
        />
        <p className="mt-3">Round: {store.round}</p>
        <p className="mt-3">Bless Deck: {store.blessDeck}</p>
        <p className="mt-3">Curse Deck: {store.curseDeck}</p>
        <p className="mt-3">
          Monster Modifier Deck: {store.monsterModifierDeck.length}
        </p>
        {store.attackHappening ? <AttackDrawModal /> : ""}
        <CurrentDeck deck={store.monsterModifierDeck} />
        <div className="mt-3">
          <h5>Active Elements</h5>
          <div className="d-flex justify-content-between">
            <p>Fire: {store.fire}</p>
            <input
              type="button"
              className="btn btn-secondary"
              value="Add Fire"
              onClick={() => dispatch({ type: "CREATE_FIRE" })}
            />
          </div>
          <div className="d-flex justify-content-between">
            <p>Ice: {store.ice}</p>
            <input
              type="button"
              className="btn btn-secondary"
              value="Add Ice"
              onClick={() => dispatch({ type: "CREATE_ICE" })}
            />
          </div>
          <div className="d-flex justify-content-between">
            <p>Wind: {store.wind}</p>
            <input
              type="button"
              className="btn btn-secondary"
              value="Add Wind"
              onClick={() => dispatch({ type: "CREATE_WIND" })}
            />
          </div>
          <div className="d-flex justify-content-between">
            <p>Earth: {store.nature}</p>
            <input
              type="button"
              className="btn btn-secondary"
              value="Add Earth"
              onClick={() => dispatch({ type: "CREATE_NATURE" })}
            />
          </div>
          <div className="d-flex justify-content-between">
            <p>Lightning: {store.light}</p>
            <input
              type="button"
              className="btn btn-secondary"
              value="Add Lightning"
              onClick={() => dispatch({ type: "CREATE_LIGHT" })}
            />
          </div>
          <div className="d-flex justify-content-between">
            <p>Darkness: {store.dark}</p>
            <input
              type="button"
              className="btn btn-secondary"
              value="Add Darkness"
              onClick={() => dispatch({ type: "CREATE_DARK" })}
            />
          </div>
        </div>
        <div className="mt-3">
          <h5>Active Cards:</h5>
          {store.activeCard.length > 0 ? (
            store.activeCard.map((card, index) => (
              <p key={index}>
                {card.value === null ? "x0" : card.value}{" "}
                {card.shuffle ? "(Shuffle)" : ""}
              </p>
            ))
          ) : (
            <p>No active cards drawn yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};
