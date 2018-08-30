import React, { Component } from 'react';
import { desactivable } from '../hocs/desactivable';

class Clock extends Component {

  constructor() {
    super();
    this.state = {
      now: new Date(),
    };
  }

  componentDidMount() {
    this._intervalId = setInterval(() => {
      this.setState({
        now: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this._intervalId);
  }

  render() {
    return (
      <div>
        {this.state.now.toLocaleTimeString()}
      </div>
    );
  }
}

const ClockDesactivable = desactivable(Clock);

export {
  Clock,
  ClockDesactivable,
};
