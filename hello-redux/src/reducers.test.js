import { counterReducer } from './reducers';

describe('reducers', () => {
  it('should initialize with 0', () => {
    const nextState = counterReducer(undefined, {type: '@@INIT'});

    expect(nextState).toEqual(0);
  })
});
