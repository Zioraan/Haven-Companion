import { useState } from "react";
import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const useMonsterModifierLib = () => {
  const { store, dispatch } = useGlobalReducer();

  const singleDraw = (deck) => {
    let drawnCurse = 0;
    let drawnBless = 0;
    const randomIndex = Math.floor(Math.random() * deck.length);
    const drawnCard = deck[randomIndex];
    if (drawnCard.value === null && drawnCard.shuffle === false) {
      console.log("Curse card drawn!");
      drawnCurse += 1;
    }
    if (drawnCard.value === "x2" && drawnCard.shuffle === false) {
      console.log("Bless card drawn!");
      drawnBless += 1;
    }
    deck.splice(randomIndex, 1);
    console.log("Drawn Card", {
      Card: drawnCard,
      Bless: drawnBless,
      Curse: drawnCurse,
      Deck: deck,
    });
    return {
      Card: drawnCard,
      Bless: drawnBless,
      Curse: drawnCurse,
      Deck: deck,
    };
  };

  const addCurseOrBless = (card) => {
    if (card === "curse" && store.curseDeck > 0) {
      dispatch({ type: "ADD_CURSE_CARD" });
    } else if (card === "bless" && store.blessDeck > 0) {
      dispatch({ type: "ADD_BLESS_CARD" });
    } else {
      console.log(`No more cards left in the ${card} deck!`);
    }
  };

  const reShuffle = () => {
    const baseDeck = [...initialMonsterModifierDeck];
    console.log("baseDeck", baseDeck);
    for (let i = 10; i > store.curseDeck; i--) {
      baseDeck.push({ ...curseCard });
    }
    for (let i = 10; i > store.blessDeck; i--) {
      baseDeck.push({ ...blessCard });
    }
    dispatch({ type: "SET_MONSTER_MODIFIER_DECK", payload: baseDeck });
    return baseDeck;
  };

  const deepIncludes = (array, object) => {
    return array.some(
      (item) =>
        item.value === object.value &&
        item.shuffle === object.shuffle &&
        item.priority === object.priority
    );
  };

  const endRound = () => {
    const deck = store.monsterModifierDeck;
    if (
      !deepIncludes(deck, { value: "x2", shuffle: true, priority: 3 }) ||
      !deepIncludes(deck, { value: null, shuffle: true, priority: -3 })
    ) {
      console.log("Reshuffling deck for the next round...");
      const reshuffledDeck = reShuffle();
      dispatch({ type: "SET_MONSTER_MODIFIER_DECK", payload: reshuffledDeck });
    }
    dispatch({ type: "END_ROUND" });
  };

  return {
    endRound,
    singleDraw,
    addCurseOrBless,
    reShuffle,
  };
};

export const initialMonsterModifierDeck = [
  {
    value: null,
    shuffle: true,
    priority: -3,
  },
  {
    value: -2,
    shuffle: false,
    priority: -2,
  },
  {
    value: -1,
    shuffle: false,
    priority: -1,
  },
  {
    value: -1,
    shuffle: false,
    priority: -1,
  },
  {
    value: -1,
    shuffle: false,
    priority: -1,
  },
  {
    value: -1,
    shuffle: false,
    priority: -1,
  },
  {
    value: -1,
    shuffle: false,
    priority: -1,
  },
  {
    value: 0,
    shuffle: false,
    priority: 0,
  },
  {
    value: 0,
    shuffle: false,
    priority: 0,
  },
  {
    value: 0,
    shuffle: false,
    priority: 0,
  },
  {
    value: 0,
    shuffle: false,
    priority: 0,
  },
  {
    value: 0,
    shuffle: false,
    priority: 0,
  },
  {
    value: 0,
    shuffle: false,
    priority: 0,
  },
  {
    value: +1,
    shuffle: false,
    priority: 1,
  },
  {
    value: +1,
    shuffle: false,
    priority: 1,
  },
  {
    value: +1,
    shuffle: false,
    priority: 1,
  },
  {
    value: +1,
    shuffle: false,
    priority: 1,
  },
  {
    value: +1,
    shuffle: false,
    priority: 1,
  },
  {
    value: +2,
    shuffle: false,
    priority: 2,
  },
  {
    value: "x2",
    shuffle: true,
    priority: 3,
  },
];

export const curseCard = {
  value: null,
  shuffle: false,
  priority: -3,
};
export const blessCard = {
  value: "x2",
  shuffle: false,
  priority: 3,
};
