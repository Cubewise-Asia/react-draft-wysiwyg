import PropTypes from "prop-types";
import "./styles.css";

class Variable {
  constructor(className) {
    this.className = className;
  }
  getVariableComponent = () => {
    const VariableComponent = ({ children }) => children;
    console.log("getVariableComponent =======");
    VariableComponent.propTypes = {
      entityKey: PropTypes.number,
      children: PropTypes.array,
      contentState: PropTypes.object,
    };
    return VariableComponent;
  };
  getVariableDecorators = () => ({
    strategy: this.findMentionEntities,
    component: this.getVariableComponent(),
  });
}

Variable.prototype.findMentionEntities = (
  contentBlock,
  callback,
  contentState
) => {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return (
      entityKey !== null &&
      contentState.getEntity(entityKey).getType() === "VARIABLE"
    );
  }, callback);
};

export default Variable;
