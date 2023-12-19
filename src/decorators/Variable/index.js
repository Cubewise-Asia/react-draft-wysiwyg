import Variable from "./Variable";
import Suggestion from "./Suggestion";

const getDecorators = (config) => [
  new Variable(config.mentionClassName).getMentionDecorator(),
  new Suggestion(config).getSuggestionDecorator(),
];

export default getDecorators;
