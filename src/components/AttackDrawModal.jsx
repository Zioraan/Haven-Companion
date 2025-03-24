import React from "react";
import { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import {
  useMonsterModifierLib,
  initialMonsterModifierDeck,
} from "../components/monsterModifierLib.jsx";

export const AttackDrawModal = () => {
  const { store, dispatch } = useGlobalReducer();
  const { singleDraw, reShuffle } = useMonsterModifierLib();

  const [advantage, setAdvantage] = useState(false);
  const [disadvantage, setDisadvantage] = useState(false);

  const drawCard = (advantage, disadvantage) => {
    let deck = store.monsterModifierDeck;
    const drawnCards = [];
    let drawnBless = 0;
    let drawnCurse = 0;
    const activeCard = [];

    if (advantage != disadvantage) {
      for (let i = 1; i <= 2; i++) {
        if (deck.length === 0) {
          deck = [...initialMonsterModifierDeck];
          console.log("Deck reshuffled", deck);
        }
        const drawnCard = singleDraw(deck);
        drawnCards.push(drawnCard.Card);
        drawnBless = drawnBless += drawnCard.Bless;
        drawnCurse = drawnCurse += drawnCard.Curse;
        deck = drawnCard.Deck;
      }
      if (advantage) {
        activeCard.push(
          drawnCards.reduce((a, b) => (a.priority > b.priority ? a : b))
        );
      } else {
        activeCard.push(
          drawnCards.reduce((a, b) => (a.priority < b.priority ? a : b))
        );
      }
    } else {
      if (deck.length === 0) {
        deck = [...initialMonsterModifierDeck];
        console.log("Deck reshuffled", deck);
      }
      const drawnCard = singleDraw(deck);
      drawnCards.push(drawnCard.Card);
      drawnBless = drawnBless += drawnCard.Bless;
      drawnCurse = drawnCurse += drawnCard.Curse;
      deck = drawnCard.Deck;
      activeCard.push(drawnCard.Card);
    }
    dispatch({ type: "SET_MONSTER_MODIFIER_DECK", payload: deck });
    dispatch({ type: "SET_ACTIVE_CARD", payload: activeCard });
    dispatch({ type: "SET_BLESS_DECK", payload: store.blessDeck + drawnBless });
    dispatch({ type: "SET_CURSE_DECK", payload: store.curseDeck + drawnCurse });
    dispatch({
      type: "ADD_TO_HISTORY",
      payload: { round: store.round, Card: drawnCards },
    });
  };

  return (
    <div>
      <h2>Attack Draw Modal</h2>
      <div className="form-group">
        <label htmlFor="advantage">Advantage</label>
        <input
          type="checkbox"
          id="advantage"
          checked={advantage}
          onChange={() => setAdvantage(!advantage)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="disadvantage">Disadvantage</label>
        <input
          type="checkbox"
          id="disadvantage"
          checked={disadvantage}
          onChange={() => setDisadvantage(!disadvantage)}
        />
      </div>
      <button
        className="btn btn-primary"
        onClick={() => drawCard(advantage, disadvantage)}
      >
        Draw Card
      </button>
    </div>
  );
};
