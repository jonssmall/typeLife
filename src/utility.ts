"use strict";

const helper = state => {      

  function getLeftIndex(startingIndex, arrayLength) {
    return (startingIndex - 1 + arrayLength) % arrayLength;
  }

  function getRightIndex(startingIndex, arrayLength) {
    return (startingIndex + 1 + arrayLength) % arrayLength;
  }

  function getLeftElement(array, startingIndex) {
    return array[getLeftIndex(startingIndex, array.length)];
  }

  function getRightElement(array, startingIndex) {
    return array[getRightIndex(startingIndex, array.length)];
  }  

  function getLeft(row, cell) {
    const currentRow = state.board[row];
    return getLeftElement(currentRow, cell);
  }

  function getUpperLeft(row, cell) {
    const rowAbove = getLeftElement(state.board, row);
    return getLeftElement(rowAbove, cell);
  };

  function getUpper(row, cell) {
    return getLeftElement(state.board, row)[cell];
  };

  function getUpperRight(row, cell) {
    const rowAbove = getLeftElement(state.board, row);
    return getRightElement(rowAbove, cell);
  };

  function getRight(row, cell) {
    const currentRow = state.board[row];
    return getRightElement(currentRow, cell);
  };

  function getLowerRight(row, cell) {
    const rowBelow = getRightElement(state.board, row);
    return getRightElement(rowBelow, cell);
  };

  function getLower(row, cell) {
    return getRightElement(state.board, row)[cell];
  };

  function getLowerLeft(row, cell) {
    const rowBelow = getRightElement(state.board, row);
    return getLeftElement(rowBelow, cell);
  };

  return {
    getNeighbors: function(row, cell) {
      return {
        left: getLeft(row, cell),
        upperLeft: getUpperLeft(row, cell),
        upper: getUpper(row, cell),
        upperRight: getUpperRight(row, cell),
        right: getRight(row, cell),
        lowerRight: getLowerRight(row, cell),
        lower: getLower(row, cell),
        lowerLeft: getLowerLeft(row, cell)
      }
    }
  };
}

export default helper;
