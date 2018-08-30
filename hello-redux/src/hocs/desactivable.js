import React, { Component } from 'react';

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}


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
      const {show, ...props} = this.props;

      return (
        <div>
          <button onClick={this.onClickHandler}>{this.state.show ? 'Off' : 'On'}</button>
          {this.state.show && <InnerComponent {...props} />}
        </div>
      );
    }
  }

  ContainerDesactivable.displayName = `Desactivable(${getDisplayName(InnerComponent)})`;


  return ContainerDesactivable;
}

export {
  desactivable,
};
