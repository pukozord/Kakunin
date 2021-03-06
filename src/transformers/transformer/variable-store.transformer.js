import store from '../../helpers/variable-store.helper';

class VariableStoreTransformer {
  constructor(variableStore) {
    this.variableStore = variableStore;
  }

  isSatisfiedBy(prefix) {
    return 'v:' === prefix;
  }

  transform(value) {
    return this.variableStore.getVariableValue(value);
  }
}
export const createVariableStoreTransformer = (variableStore = store) => new VariableStoreTransformer(variableStore);
