import {
  blessCard,
  curseCard,
  initialMonsterModifierDeck,
} from "./components/monsterModifierLib.jsx";
import { Statuses } from "./assets/Statuses.jsx";

export const initialStore = () => {
  return {
    monsterModifierDeck: [...initialMonsterModifierDeck],
    curseDeck: 10,
    blessDeck: 10,
    round: 1,
    history: [],
    activeCard: [],
    attackHappening: false,
    fire: 0,
    ice: 0,
    wind: 0,
    nature: 0,
    light: 0,
    dark: 0,
    players: [
      {
        name: "Player 1",
        hp: 0,
        maxHp: 0,
        statuses: [...Statuses],
        wood: 0,
        iron: 0,
        gold: 0,
        hide: 0,
        arrowvine: 0,
        axenut: 0,
        rockroot: 0,
        snowthistle: 0,
        flamefruit: 0,
        corpsecap: 0,
        minimized: true,
      },
      {
        name: "Player 2",
        hp: 0,
        maxHp: 0,
        statuses: [...Statuses],
        wood: 0,
        iron: 0,
        gold: 0,
        hide: 0,
        arrowvine: 0,
        axenut: 0,
        rockroot: 0,
        snowthistle: 0,
        flamefruit: 0,
        corpsecap: 0,
        minimized: true,
      },
      {
        name: "Player 3",
        hp: 0,
        maxHp: 0,
        statuses: [...Statuses],
        wood: 0,
        iron: 0,
        gold: 0,
        hide: 0,
        arrowvine: 0,
        axenut: 0,
        rockroot: 0,
        snowthistle: 0,
        flamefruit: 0,
        corpsecap: 0,
        minimized: true,
      },
      {
        name: "Player 4",
        hp: 0,
        maxHp: 0,
        statuses: [...Statuses],
        wood: 0,
        iron: 0,
        gold: 0,
        hide: 0,
        arrowvine: 0,
        axenut: 0,
        rockroot: 0,
        snowthistle: 0,
        flamefruit: 0,
        corpsecap: 0,
        minimized: true,
      },
    ],
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "SET_MONSTER_MODIFIER_DECK":
      return {
        ...store,
        monsterModifierDeck: action.payload,
      };
    case "SET_BLESS_DECK":
      return {
        ...store,
        blessDeck: action.payload,
      };
    case "SET_CURSE_DECK":
      return {
        ...store,
        curseDeck: action.payload,
      };
    case "ADD_BLESS_CARD":
      return {
        ...store,
        monsterModifierDeck: [...store.monsterModifierDeck, blessCard],
        blessDeck: store.blessDeck - 1,
      };
    case "ADD_CURSE_CARD":
      return {
        ...store,
        monsterModifierDeck: [...store.monsterModifierDeck, curseCard],
        curseDeck: store.curseDeck - 1,
      };
    case "RESET_STORE":
      return initialStore();
    case "SET_ATTACK_HAPPENING":
      return {
        ...store,
        attackHappening: action.payload,
      };
    case "SET_ACTIVE_CARD":
      return {
        ...store,
        activeCard: action.payload,
      };
    case "ADD_TO_HISTORY":
      return {
        ...store,
        history: [...store.history, action.payload],
      };
    case "CREATE_FIRE":
      return {
        ...store,
        fire: 2,
      };
    case "CREATE_ICE":
      return {
        ...store,
        ice: 2,
      };
    case "CREATE_WIND":
      return {
        ...store,
        wind: 2,
      };
    case "CREATE_NATURE":
      return {
        ...store,
        nature: 2,
      };
    case "CREATE_LIGHT":
      return {
        ...store,
        light: 2,
      };
    case "CREATE_DARK":
      return {
        ...store,
        dark: 2,
      };
    case "INVOKE_FIRE":
      return {
        ...store,
        fire: 0,
      };
    case "INVOKE_ICE":
      return {
        ...store,
        ice: 0,
      };
    case "INVOKE_WIND":
      return {
        ...store,
        wind: 0,
      };
    case "INVOKE_NATURE":
      return {
        ...store,
        nature: 0,
      };
    case "INVOKE_LIGHT":
      return {
        ...store,
        light: 0,
      };
    case "INVOKE_DARK":
      return {
        ...store,
        dark: 0,
      };
    case "END_ROUND":
      return {
        ...store,
        round: store.round + 1,
        fire: store.fire > 0 ? store.fire - 1 : 0,
        ice: store.ice > 0 ? store.ice - 1 : 0,
        wind: store.wind > 0 ? store.wind - 1 : 0,
        nature: store.nature > 0 ? store.nature - 1 : 0,
        light: store.light > 0 ? store.light - 1 : 0,
        dark: store.dark > 0 ? store.dark - 1 : 0,
        activeCard: [],
      };
    case "TOGGLE_PLAYER_MINIMIZED": {
      const updatedPlayers = store.players.map((player, index) => {
        if (index === action.payload) {
          return { ...player, minimized: !player.minimized };
        }
        return player;
      });
      return {
        ...store,
        players: updatedPlayers,
      };
    }
    default:
      throw Error("Unknown action.");
  }
}
