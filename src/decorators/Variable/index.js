import Variable from "./Variable";
import Suggestion from "./Suggestion";

const getDecorators = (config) => [
  new Variable(config.mentionClassName).getVariableDecorators(),
  new Suggestion(config).getSuggestionDecorator(),
];

export default getDecorators;
