const selectCounter = (state, i) => selectCounters(state)[i];
const selectCounters = (state) => state.counters;

export {
  selectCounter,
  selectCounters,
};
