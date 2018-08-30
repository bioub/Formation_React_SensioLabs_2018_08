import React, { Component } from 'react';
import {desactivable} from "../hocs/desactivable";

class ButtonCountable extends Component {

  /*
  constructor() {
    super();
    this.state = {
      increment: 0,
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    this.setState({
      increment: this.state.increment + 1,
    });
  }
  */

  // Field declarations
  // https://github.com/tc39/proposal-class-fields
  state = {
    increment: 0,
  };

  onClickHandler = () => {
    this.setState({
      increment: this.state.increment + 1,
    });
  };

  render() {
    return (
      <button onClick={this.onClickHandler}>{this.state.increment}</button>
    );
  }

}

const ButtonCountableDesactivable = desactivable(ButtonCountable);

export {
  ButtonCountable,
  ButtonCountableDesactivable,
};
