import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { countersReducer, firstNameReducer } from './reducers';

const store = createStore(
  combineReducers({
    counters: countersReducer,
    firstName: firstNameReducer,
  }),
  // preloadedState,
  composeWithDevTools(),
);

export {
  store,
};
