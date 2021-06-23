// takes in the dimensions & speed to store the board
// responsible for producing next state

import { Game } from "./models";
import neighborHelper from "./utility";

export function gameFactory(height: number, width: number): Game {
  const game = [];
  for (let i = 0; i < height; i++) {
    const row = [];
    for (let j = 0; j < width; j++) {
      row.push(Boolean(Math.round(Math.random())));
    }
    game.push(row);
  }

  return game;
}

export function next(game: Game): Game {
  return game.map((row, rowIndex) => {
    return row.map((cell, cellIndex) => {
      const neighborCells = neighborHelper(game).getNeighbors(
        rowIndex,
        cellIndex
      );

      const livingNeighborCount = Object.values(neighborCells).filter(
        (c) => c
      ).length;

      //return true/false based on Conway rules:
      // Alive, less than 2 neighbors - dead
      // Alive, 2-3 neighbors - alive
      // Alive, more than 3 neighbors - dead
      // Dead, exactly 3 neighbors - alive
      if (cell) {
        return livingNeighborCount === 2 || livingNeighborCount === 3;
      } else {
        return livingNeighborCount === 3;
      }
    });
  });
}
