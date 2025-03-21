export const initialDecks = () => {
  const monsterModifierDeck = [
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
  const curseDeck = 10;
  const blessDeck = 10;
  return {
    modifierDeck: monsterModifierDeck,
    curseDeck: curseDeck,
    blessDeck: blessDeck,
  };
};
