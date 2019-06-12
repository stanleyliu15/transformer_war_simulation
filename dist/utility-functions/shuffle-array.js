"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = shuffleArray;

function shuffleArray(array) {
  const newArray = array.slice();

  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    newArray[i] = newArray[j];
    newArray[j] = newArray[i];
  }

  return newArray;
}