const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      npcDefaultDeck: [
        { value: "*2", shuffle: true },
        { value: "+2", shuffle: false },
        { value: "+1", shuffle: false },
        { value: "+1", shuffle: false },
        { value: "+1", shuffle: false },
        { value: "+1", shuffle: false },
        { value: "+1", shuffle: false },
        { value: "+0", shuffle: false },
        { value: "+0", shuffle: false },
        { value: "+0", shuffle: false },
        { value: "+0", shuffle: false },
        { value: "+0", shuffle: false },
        { value: "+0", shuffle: false },
        { value: "-1", shuffle: false },
        { value: "-1", shuffle: false },
        { value: "-1", shuffle: false },
        { value: "-1", shuffle: false },
        { value: "-1", shuffle: false },
        { value: "-2", shuffle: false },
        { value: "*0", shuffle: false },
      ],
      allyDeck: [],
      enemyDeck: [],
      players: 2,
      playerOne: "Player One",
      playerTwo: "Player Two",
      playerThree: "Player Three",
      playerFour: "Player Four",
      scenarioNumber: "",
      scenarioData: {},
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
      createAllyDeck: () => {
        const store = getStore();
        const allyDeck = npcDefaultDeck;
        setStore({ allyDeck: allyDeck });
      },
      createEnemyDeck: () => {
        const store = getStore();
        const enemyDeck = npcDefaultDeck;
        setStore({ enemyDeck: enemyDeck });
      },
      handleGettingScenario: async () => {
        try {
          const store = getStore();
          const response = await fetch(
            process.env.BACKEND_URL + "/scenario/" + store.scenarioNumber
          );
          const data = await resp.json();
          setStore({ scenarioData: data });
          return data;
        } catch (error) {
          console.log("Error loading scenario data from backend", error);
        }
      },
      handleGettingLootDeck: async () => {
        try {
          const store = getStore();
          const response = await fetch(process.env.BACKEND_URL + "/loot_deck/");
          const data = await resp.json();
          setStore({ lootDeck: data });
          return data;
        } catch (error) {
          console.log("Error loading loot deck from backend", error);
        }
      },
    },
  };
};

export default getState;
