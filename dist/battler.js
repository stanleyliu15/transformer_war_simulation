"use strict";

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _wayTougherSpecification = _interopRequireDefault(require("./transformer-specifications/way-tougher-specification"));

var _wayMoreSkilledSpecification = _interopRequireDefault(require("./transformer-specifications/way-more-skilled-specification"));

var _omegaLevelSpecification = _interopRequireDefault(require("./transformer-specifications/omega-level-specification"));

var _overallRatingSpecification = _interopRequireDefault(require("./transformer-specifications/overall-rating-specification"));

var _tiebreakSpecification = _interopRequireDefault(require("./transformer-specifications/tiebreak-specification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Battler {
  constructor() {
    this._battleSpecifications = [new _omegaLevelSpecification.default(), new _wayTougherSpecification.default({
      strengthDifference: 3,
      courageDifference: 4
    }), new _wayMoreSkilledSpecification.default({
      skillDifference: 3
    }), new _overallRatingSpecification.default(), new _tiebreakSpecification.default()];
  }

  fightBattle(transformerOne, transformerTwo) {
    if (transformerOne.allegiance === transformerTwo.allegiance) {
      throw new Error("These two transformers can't fight each other!  They're both ".concat(transformerOne.allegiance, "s"));
    }

    for (let battleSpec of this._battleSpecifications) {
      if (battleSpec.evaluate(transformerOne, transformerTwo)) {
        return {
          victor: transformerOne,
          loser: transformerTwo,
          rationale: battleSpec.rationale,
          description: battleSpec.friendlyDescription(transformerOne, transformerTwo)
        };
      } else if (battleSpec.evaluate(transformerTwo, transformerOne)) {
        return {
          victor: transformerTwo,
          loser: transformerOne,
          rationale: battleSpec.rationale,
          description: battleSpec.friendlyDescription(transformerTwo, transformerOne)
        };
      }
    }

    throw new Error("Could not determine a winner between ".concat(transformerOne, " and ").concat(transformerTwo));
  }

}

var _default = Battler;
exports.default = _default;