import React from 'react';
import { connect } from 'react-redux';
import { desactivable } from '../hocs/desactivable';
import { counterIncrement } from '../actions';
import { selectCounter } from '../selectors';

const ButtonCountable = ({onClickHandler, increment}) => <button onClick={onClickHandler}>{increment}</button>

const mapStateToProps = (state, {i}) => {
  return ({
    increment: selectCounter(state, i),
  });
};

const mapDispatchToProps = (dispatch, {i}) => ({
  onClickHandler: () => dispatch(counterIncrement(3, i)),
});

const ButtonCountableConnected = connect(mapStateToProps, mapDispatchToProps)(ButtonCountable);
const ButtonCountableDesactivable = desactivable(ButtonCountableConnected);

export {
  ButtonCountable,
  ButtonCountableConnected,
  ButtonCountableDesactivable,
};
