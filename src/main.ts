import { gameFactory, next } from "./engine";
import { Game } from "./models";
import * as readline from "readline";

// the display is every row joined by \n
// and every element inside the row joined by whitespace,
// where the element is either a full block or an empty space.
function gameToDisplay(game: Game): string {
  const ALIVE = "\u25A0";
  const DEAD = "\u25A1";

  return game.map((r) => r.map((c) => (c ? ALIVE : DEAD)).join(" ")).join("\n");
}

let game = gameFactory(15, 15);

setInterval(() => {
  game = next(game);

  readline.cursorTo(process.stdout, 0, 0);
  readline.clearScreenDown(process.stdout);

  process.stdout.write(gameToDisplay(game) + "\n");
}, 100);
