import React, { Component } from 'react';
import { Clock } from '../components/Clock';

function desactivable(InnerComponent) {
  class ContainerDesactivable extends Component {

    state = {
      show: true,
    };

    onClickHandler = () => {
      this.setState({
        show: !this.state.show,
      });
    };

    render() {
      return (
        <div>
          <button onClick={this.onClickHandler}>{this.state.show ? 'Off' : 'On'}</button>
          {this.state.show && <InnerComponent />}
        </div>
      );
    }
  }
  return ContainerDesactivable;
}

export {
  desactivable,
};
