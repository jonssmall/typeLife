"use strict";

import { Game } from "./models";

export default function (game: Game): NeighborHelper {
  function getLeftIndex(startingIndex: number, arrayLength: number): number {
    return (startingIndex - 1 + arrayLength) % arrayLength;
  }

  function getRightIndex(startingIndex: number, arrayLength: number): number {
    return (startingIndex + 1 + arrayLength) % arrayLength;
  }

  function getLeftElement<T>(array: T[], startingIndex: number): T {
    return array[getLeftIndex(startingIndex, array.length)];
  }

  function getRightElement<T>(array: T[], startingIndex: number) {
    return array[getRightIndex(startingIndex, array.length)];
  }

  function getLeft(rowIndex: number, cellIndex: number): boolean {
    const currentRow = game[rowIndex];
    return getLeftElement(currentRow, cellIndex);
  }

  function getUpperLeft(rowIndex: number, cellIndex: number): boolean {
    const rowAbove = getLeftElement(game, rowIndex);
    return getLeftElement(rowAbove, cellIndex);
  }

  function getUpper(rowIndex: number, cellIndex: number): boolean {
    return getLeftElement(game, rowIndex)[cellIndex];
  }

  function getUpperRight(rowIndex: number, cellIndex: number): boolean {
    const rowAbove = getLeftElement(game, rowIndex);
    return getRightElement(rowAbove, cellIndex);
  }

  function getRight(rowIndex: number, cellIndex: number): boolean {
    const currentRow = game[rowIndex];
    return getRightElement(currentRow, cellIndex);
  }

  function getLowerRight(rowIndex: number, cellIndex: number) {
    const rowBelow = getRightElement(game, rowIndex);
    return getRightElement(rowBelow, cellIndex);
  }

  function getLower(rowIndex: number, cellIndex: number) {
    return getRightElement(game, rowIndex)[cellIndex];
  }

  function getLowerLeft(rowIndex: number, cellIndex: number) {
    const rowBelow = getRightElement(game, rowIndex);
    return getLeftElement(rowBelow, cellIndex);
  }

  return {
    getNeighbors: function (rowIndex: number, cellIndex: number): Neighbors {
      return {
        left: getLeft(rowIndex, cellIndex),
        upperLeft: getUpperLeft(rowIndex, cellIndex),
        upper: getUpper(rowIndex, cellIndex),
        upperRight: getUpperRight(rowIndex, cellIndex),
        right: getRight(rowIndex, cellIndex),
        lowerRight: getLowerRight(rowIndex, cellIndex),
        lower: getLower(rowIndex, cellIndex),
        lowerLeft: getLowerLeft(rowIndex, cellIndex),
      };
    },
  };
}

type NeighborHelper = {
  getNeighbors: (rowIndex: number, cellIndex: number) => Neighbors;
};

export interface Neighbors {
  left: boolean;
  upperLeft: boolean;
  upper: boolean;
  upperRight: boolean;
  right: boolean;
  lowerRight: boolean;
  lower: boolean;
  lowerLeft: boolean;
}
