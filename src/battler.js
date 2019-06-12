import WayTougherSpecification from './transformer-specifications/way-tougher-specification';
import WayMoreSkilledSpecification from './transformer-specifications/way-more-skilled-specification';
import OmegaLevelSpecification from './transformer-specifications/omega-level-specification';
import OverallRatingSpecification from './transformer-specifications/overall-rating-specification';
import TieBreakSpecifaction from './transformer-specifications/tiebreak-specification';

class Battler {
  constructor() {
    this._battleSpecifications = [
      new OmegaLevelSpecification(),
      new WayTougherSpecification({ strengthDifference: 3, courageDifference: 4 }),
      new WayMoreSkilledSpecification({ skillDifference: 3 }),
      new OverallRatingSpecification(),
      new TieBreakSpecifaction()
    ];
  }

  fightBattle(transformerOne, transformerTwo) {
    if (transformerOne.allegiance === transformerTwo.allegiance) {
      throw new Error(
        `These two transformers can't fight each other!  They're both ${transformerOne.allegiance}s`
      );
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
    throw new Error(`Could not determine a winner between ${transformerOne} and ${transformerTwo}`);
  }
}

export default Battler;
