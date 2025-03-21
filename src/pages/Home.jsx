import { useState } from "react";
import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { CurrentDeck } from "../components/CurrentDeck.jsx";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  const [monsterModifierDeck, setMonsterModifierDeck] = useState(
    store.monsterModifierDeck
  );
  const [blessDeck, setBlessDeck] = useState(10);
  const [curseDeck, setCurseDeck] = useState(10);

  const initialMonsterModifierDeck = [
    {
      value: null,
      shuffle: true,
    },
    {
      value: -2,
      shuffle: false,
    },
    {
      value: -1,
      shuffle: false,
    },
    {
      value: -1,
      shuffle: false,
    },
    {
      value: -1,
      shuffle: false,
    },
    {
      value: -1,
      shuffle: false,
    },
    {
      value: -1,
      shuffle: false,
    },
    {
      value: 0,
      shuffle: false,
    },
    {
      value: 0,
      shuffle: false,
    },
    {
      value: 0,
      shuffle: false,
    },
    {
      value: 0,
      shuffle: false,
    },
    {
      value: 0,
      shuffle: false,
    },
    {
      value: 0,
      shuffle: false,
    },
    {
      value: +1,
      shuffle: false,
    },
    {
      value: +1,
      shuffle: false,
    },
    {
      value: +1,
      shuffle: false,
    },
    {
      value: +1,
      shuffle: false,
    },
    {
      value: +1,
      shuffle: false,
    },
    {
      value: +2,
      shuffle: false,
    },
    {
      value: "x2",
      shuffle: true,
    },
  ];

  const curseCard = {
    value: null,
    shuffle: false,
  };
  const blessCard = {
    value: "x2",
    shuffle: false,
  };

  const addCurseOrBless = (card) => {
    const newDeck = monsterModifierDeck;
    if (card === "curse" && curseDeck > 0) {
      setCurseDeck(curseDeck - 1);
      newDeck.push(curseCard);
      setMonsterModifierDeck(newDeck);
    } else if (card === "bless" && blessDeck > 0) {
      setBlessDeck(blessDeck - 1);
      newDeck.push(blessCard);
      setMonsterModifierDeck(newDeck);
    } else {
      console.log(`No more cards left in the ${card} deck!`);
    }
  };

  const drawCard = () => {
    const deck = monsterModifierDeck;
    const randomIndex = Math.floor(Math.random() * deck.length);
    const drawnCard = deck[randomIndex];
    console.log("drawnCard ", drawnCard);
    if (drawnCard.value === null && drawnCard.shuffle === false) {
      console.log("Curse card drawn!");
      setCurseDeck(curseDeck + 1);
    }
    if (drawnCard.value === "x2" && drawnCard.shuffle === false) {
      console.log("Bless card drawn!");
      setBlessDeck(blessDeck + 1);
    }

    const newDeck = [
      ...deck.slice(0, randomIndex),
      ...deck.slice(randomIndex + 1),
    ];
    setMonsterModifierDeck(newDeck);
    if (drawnCard.shuffle === true) {
      reShuffle();
    }

    console.log("newDeck ", newDeck);
  };

  const reShuffle = () => {
    console.log("intialDeck ", initialMonsterModifierDeck);
    const baseDeck = initialMonsterModifierDeck;
    console.log("reShuffle before statuses ", baseDeck);
    for (let i = 10; i > curseDeck; i--) {
      baseDeck.push(curseCard);
    }
    for (let i = 10; i > blessDeck; i--) {
      baseDeck.push(blessCard);
    }
    setMonsterModifierDeck(baseDeck);
    return baseDeck;
  };

  return (
    <div className="text-center mt-5">
      <input
        type="button"
        className="btn btn-primary"
        value="Draw"
        onClick={() => drawCard()}
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
      <p className="mt-3">Bless Deck: {blessDeck}</p>
      <p className="mt-3">Curse Deck: {curseDeck}</p>
      <p className="mt-3">
        Monster Modifier Deck: {monsterModifierDeck.length}
      </p>
      <div>
        <h5>Current Deck:</h5>
      </div>
      <CurrentDeck deck={monsterModifierDeck} />
    </div>
  );
};
