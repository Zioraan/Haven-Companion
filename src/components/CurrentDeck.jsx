import React from "react";

export const CurrentDeck = ({ deck }) => {
  const countCardTypes = (deck) => {
    const counts = {
      x2: 0,
      "+2": 0,
      "+1": 0,
      0: 0,
      "-1": 0,
      "-2": 0,
      x0: 0,
      bless: 0,
      curse: 0,
    };

    deck.forEach((card) => {
      if (card.value === "x2" && card.shuffle === false) {
        counts.bless += 1;
      } else if (card.value === null && card.shuffle === false) {
        counts.curse += 1;
      } else if (card.value === "x2") {
        counts.x2 += 1;
      } else if (card.value === 2) {
        counts["+2"] += 1;
      } else if (card.value === 1) {
        counts["+1"] += 1;
      } else if (card.value === 0) {
        counts["0"] += 1;
      } else if (card.value === -1) {
        counts["-1"] += 1;
      } else if (card.value === -2) {
        counts["-2"] += 1;
      } else if (card.value === null) {
        counts.x0 += 1;
      }
    });

    return counts;
  };

  const cardCounts = countCardTypes(deck);

  return (
    <div>
      <h2>Current Deck</h2>
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">x2</th>
            <th scope="col">+2</th>
            <th scope="col">+1</th>
            <th scope="col">0</th>
            <th scope="col">-1</th>
            <th scope="col">-2</th>
            <th scope="col">x0</th>
            <th scope="col">Bless</th>
            <th scope="col">Curse</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{"•".repeat(cardCounts.x2)}</td>
            <td>{"•".repeat(cardCounts["+2"])}</td>
            <td>{"•".repeat(cardCounts["+1"])}</td>
            <td>{"•".repeat(cardCounts["0"])}</td>
            <td>{"•".repeat(cardCounts["-1"])}</td>
            <td>{"•".repeat(cardCounts["-2"])}</td>
            <td>{"•".repeat(cardCounts.x0)}</td>
            <td>{"•".repeat(cardCounts.bless)}</td>
            <td>{"•".repeat(cardCounts.curse)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
