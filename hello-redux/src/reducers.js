import { COUNTER_INCREMENT } from './constants';

const counterReducer = (state = 0, {type, payload}) => {
  switch (type) {
    case COUNTER_INCREMENT:
      return state + payload.increment;
    default:
      return state;
  }
};

const countersReducer = (state = [], {type, payload}) => {
  switch (type) {
    case COUNTER_INCREMENT:
      return [
        ...state.slice(0, payload.i),
        counterReducer(state[payload.i], {type, payload}),
        ...state.slice(payload.i + 1),
      ];
    default:
      return state;
  }
};

const firstNameReducer = (state = '', {type, payload}) => {
  switch (type) {

  }

  return state;
};

export {
  countersReducer,
  firstNameReducer,
}
