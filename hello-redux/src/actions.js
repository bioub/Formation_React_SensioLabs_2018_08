import { COUNTER_INCREMENT } from './constants';

// Flux Standard Action (FSA)
const counterIncrement = (increment = 1, i = 0) => ({
  type: COUNTER_INCREMENT,
  payload: {
    increment,
    i,
  }
});

export {
  counterIncrement,
};
