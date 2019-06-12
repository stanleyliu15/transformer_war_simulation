import Validator from './validator';
import AllegianceMustBeAutobotOrDecepticonRule from './allegiance-must-be-autobot-or-decepticon-rule';
import NameMustBeValidRule from './name-must-be-valid-rule';
import TechSpecValueMustBeValidRule from './techspec-value-must-be-valid-rule';

export default function TransformerValidator() {
  return Validator([
    AllegianceMustBeAutobotOrDecepticonRule,
    NameMustBeValidRule,
    TechSpecValueMustBeValidRule('intelligence'),
    TechSpecValueMustBeValidRule('speed'),
    TechSpecValueMustBeValidRule('endurance'),
    TechSpecValueMustBeValidRule('rank'),
    TechSpecValueMustBeValidRule('courage'),
    TechSpecValueMustBeValidRule('firepower'),
    TechSpecValueMustBeValidRule('skill')
  ]);
}
