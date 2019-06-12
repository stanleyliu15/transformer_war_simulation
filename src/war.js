import { Allegiances } from './constants/allegiances';
import Battler from './battler';
import UltimateDestructionSpecification from './war-specifications/optimus-predaking-on-opposite-sides-specification';
import NoAutobotsSpecification from './war-specifications/no-autobots-specification';
import NoDecepticonsSpecification from './war-specifications/no-decepticons-specification';
import shuffle from 'shuffle-array';
import decorateTransformer from './utility-functions/decorate-transformer';

export default class War {
  constructor(transformerModels) {
    let transformers = transformerModels.map(tfModel => decorateTransformer(tfModel));

    // First, divide the group into Autobots and Decepticons
    this._autobots = transformers
      .filter(transformer => {
        return transformer.allegiance === Allegiances.Autobot;
      })
      .sort(this.rankDescending);

    this._decepticons = transformers
      .filter(transformer => {
        return transformer.allegiance === Allegiances.Decepticon;
      })
      .sort(this.rankDescending);

    this._warSpecifications = [
      NoAutobotsSpecification,
      NoDecepticonsSpecification,
      UltimateDestructionSpecification
    ];
  }

  rankDescending(tfOne, tfTwo) {
    return tfTwo.rank - tfOne.rank;
  }

  wage({ randomizeSides } = { randomizeSides: false }) {
    console.log();
    console.log('----------------');
    console.log('WAR IS DECLARED.');
    console.log('----------------');
    console.log();
    const autobots = randomizeSides
      ? shuffle(this._autobots, { copy: true })
      : this._autobots.slice();
    const decepticons = randomizeSides
      ? shuffle(this._decepticons, { copy: true })
      : this._decepticons.slice();

    for (let warSpec of this._warSpecifications) {
      // Evaluate the specs in order of precedence.
      if (warSpec.evaluate(autobots, decepticons) === true) {
        return warSpec.getOutcome(autobots, decepticons);
      }
    }

    // Create a battle for every transformer set.
    let battleResults = this.getInitialBattleResults(autobots, decepticons, new Battler());
    battleResults = this.appendSurvivors(battleResults, autobots, decepticons);

    const victoriousAutobots = this.getVictoriousTransformers(Allegiances.Autobot, battleResults);
    const victoriousDecepticons = this.getVictoriousTransformers(
      Allegiances.Decepticon,
      battleResults
    );

    if (victoriousAutobots.length === victoriousDecepticons.length) {
      return {
        winningAllegiance: Allegiances.Autobot,
        victors: victoriousAutobots,
        survivors: victoriousAutobots.concat(victoriousDecepticons),
        battleResults: battleResults,
        code: 'tie-but-good-guys-win',
        friendlyDescription: `Was actually a tie, but the good guys always win.`
      };
    }

    // If you don't get the below variable name, I feel for you
    let decepticonsSuperiorAutobotsInferior =
      victoriousDecepticons.length > victoriousAutobots.length;

    return decepticonsSuperiorAutobotsInferior
      ? {
          winningAllegiance: Allegiances.Decepticon,
          victors: victoriousDecepticons,
          survivors: victoriousAutobots,
          battleResults: battleResults,
          code: 'decepticons',
          friendlyDescription: 'The Decepticons were victorious!'
        }
      : {
          winningAllegiance: Allegiances.Autobot,
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
      console.log(`About to do a battle between ${autobots[i].name} and ${decepticons[i].name}`);
      battleResults.push(battler.fightBattle(autobots[i], decepticons[i]));
      ++i;
    }
    return battleResults;
  }

  appendSurvivors(battleResults, autobots, decepticons) {
    const battleCount = battleResults.length;
    let remainingAutobots = battleCount < autobots.length ? autobots.slice(battleCount) : [];
    let remainingDecepticons =
      battleCount < decepticons.length ? decepticons.slice(battleCount) : [];
    let remainingTransformers = remainingAutobots.concat(remainingDecepticons);

    let newBattleResults = battleResults.slice();
    for (let remainingTf of remainingTransformers) {
      newBattleResults.push({
        victor: remainingTf,
        loser: 'none',
        rationale: 'forfeit',
        description: `There was no competitor to battle against ${remainingTf.name}`
      });
    }
    return newBattleResults;
  }

  getVictoriousTransformers(allegiance, battleResults) {
    return battleResults.filter(br => br.victor.allegiance === allegiance).map(br => br.victor);
  }
}
