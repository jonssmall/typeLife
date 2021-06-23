// import { gameFactory, next } from "./engine";
// import { Game } from "./models";

// the display is every row joined by \n
// and every element inside the row joined by whitespace,
// where the element is either a full block or an empty space.

// function gameToDisplay(game: Game): string {
//   const ALIVE = "\u25A0";
//   const DEAD = "\u25A1";

//   return game.map((r) => r.map((c) => (c ? ALIVE : DEAD)).join(" ")).join("\n");
// }

// let game = gameFactory(25, 25);

// eslint-disable-next-line no-constant-condition
while (true) {
  console.log("hi");
  // setInterval(() => {
  //   game = next(game);
  //   // process.stdout.write(gameToDisplay(game) + "\n");
  //   console.log("hi");
  // }, 500);
}
