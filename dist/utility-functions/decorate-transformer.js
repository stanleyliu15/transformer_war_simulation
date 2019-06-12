"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = decorateTransformer;

function decorateTransformer(transformerModel) {
  transformerModel.overallRating = () => {
    return transformerModel.strength + transformerModel.intelligence + transformerModel.speed + transformerModel.endurance + transformerModel.firepower;
  };

  return transformerModel;
}