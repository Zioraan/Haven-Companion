export const initialStore = () => {
  return {
    /* message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ] */
    monsterModifierDeck: [
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
    ],
  };
};

export default function storeReducer(store, action = {}) {
  switch (
    action.type
    /* case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    default:
      throw Error('Unknown action.'); */
  ) {
  }
}
