"use strict";

require("core-js/modules/es.array.sort");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _allegiances = require("./constants/allegiances");

var _battler = _interopRequireDefault(require("./battler"));

var _optimusPredakingOnOppositeSidesSpecification = _interopRequireDefault(require("./war-specifications/optimus-predaking-on-opposite-sides-specification"));

var _noAutobotsSpecification = _interopRequireDefault(require("./war-specifications/no-autobots-specification"));

var _noDecepticonsSpecification = _interopRequireDefault(require("./war-specifications/no-decepticons-specification"));

var _shuffleArray = _interopRequireDefault(require("shuffle-array"));

var _decorateTransformer = _interopRequireDefault(require("./utility-functions/decorate-transformer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class War {
  constructor(transformerModels) {
    let transformers = transformerModels.map(tfModel => (0, _decorateTransformer.default)(tfModel)); // First, divide the group into Autobots and Decepticons

    this._autobots = transformers.filter(transformer => {
      return transformer.allegiance === _allegiances.Allegiances.Autobot;
    }).sort(this.rankDescending);
    this._decepticons = transformers.filter(transformer => {
      return transformer.allegiance === _allegiances.Allegiances.Decepticon;
    }).sort(this.rankDescending);
    this._warSpecifications = [_noAutobotsSpecification.default, _noDecepticonsSpecification.default, _optimusPredakingOnOppositeSidesSpecification.default];
  }

  rankDescending(tfOne, tfTwo) {
    return tfTwo.rank - tfOne.rank;
  }

  wage() {
    let {
      randomizeSides
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      randomizeSides: false
    };
    console.log();
    console.log('----------------');
    console.log('WAR IS DECLARED.');
    console.log('----------------');
    console.log();
    const autobots = randomizeSides ? (0, _shuffleArray.default)(this._autobots, {
      copy: true
    }) : this._autobots.slice();
    const decepticons = randomizeSides ? (0, _shuffleArray.default)(this._decepticons, {
      copy: true
    }) : this._decepticons.slice();

    for (let warSpec of this._warSpecifications) {
      // Evaluate the specs in order of precedence.
      if (warSpec.evaluate(autobots, decepticons) === true) {
        return warSpec.getOutcome(autobots, decepticons);
      }
    } // Create a battle for every transformer set.


    let battleResults = this.getInitialBattleResults(autobots, decepticons, new _battler.default());
    battleResults = this.appendSurvivors(battleResults, autobots, decepticons);
    const victoriousAutobots = this.getVictoriousTransformers(_allegiances.Allegiances.Autobot, battleResults);
    const victoriousDecepticons = this.getVictoriousTransformers(_allegiances.Allegiances.Decepticon, battleResults);

    if (victoriousAutobots.length === victoriousDecepticons.length) {
      return {
        winningAllegiance: _allegiances.Allegiances.Autobot,
        victors: victoriousAutobots,
        survivors: victoriousAutobots.concat(victoriousDecepticons),
        battleResults: battleResults,
        code: 'tie-but-good-guys-win',
        friendlyDescription: "Was actually a tie, but the good guys always win."
      };
    } // If you don't get the below variable name, I feel for you


    let decepticonsSuperiorAutobotsInferior = victoriousDecepticons.length > victoriousAutobots.length;
    return decepticonsSuperiorAutobotsInferior ? {
      winningAllegiance: _allegiances.Allegiances.Decepticon,
      victors: victoriousDecepticons,
      survivors: victoriousAutobots,
      battleResults: battleResults,
      code: 'decepticons',
      friendlyDescription: 'The Decepticons were victorious!'
    } : {
      winningAllegiance: _allegiances.Allegiances.Autobot,
      victors: victoriousAutobots,
      survivors: victoriousDecepticons,
      battleResults: battleResults,
      code: 'autobots',
      friendlyDescription: 'The Autobots were victorious!'
    };
  }

  getInitialBattleResults(autobots, decepticons, battler) {
    let i = 0;
    let battleResults = [];

    while (i < autobots.length && i < decepticons.length) {
      console.log("About to do a battle between ".concat(autobots[i].name, " and ").concat(decepticons[i].name));
      battleResults.push(battler.fightBattle(autobots[i], decepticons[i]));
      ++i;
    }

    return battleResults;
  }

  appendSurvivors(battleResults, autobots, decepticons) {
    const battleCount = battleResults.length;
    let remainingAutobots = battleCount < autobots.length ? autobots.slice(battleCount) : [];
    let remainingDecepticons = battleCount < decepticons.length ? decepticons.slice(battleCount) : [];
    let remainingTransformers = remainingAutobots.concat(remainingDecepticons);
    let newBattleResults = battleResults.slice();

    for (let remainingTf of remainingTransformers) {
      newBattleResults.push({
        victor: remainingTf,
        loser: 'none',
        rationale: 'forfeit',
        description: "There was no competitor to battle against ".concat(remainingTf.name)
      });
    }

    return newBattleResults;
  }

  getVictoriousTransformers(allegiance, battleResults) {
    return battleResults.filter(br => br.victor.allegiance === allegiance).map(br => br.victor);
  }

}

exports.default = War;