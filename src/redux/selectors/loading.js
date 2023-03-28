export const getLoadingSelector = (state, actionTypes) => {
  if (Array.isArray(actionTypes)) {
    console.log(`%c actionTypes`, 'color: blue; font-weight: 600', actionTypes);
    return actionTypes.some(r => {
      const matches = /(.*)(HANDLER|SUCCESS|FAILURE)/.exec(r);
      if (!matches) {
        return false;
      }
      const [, requestName, requestState] = matches;

      return state.loading[`${requestName}`] || false;
    });
  }
  return false;
};
