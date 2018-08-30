import React, { Component } from 'react';
import { FormPrenom } from './FormPrenom';
import { Hello } from './Hello';

class ContainerPrenom extends Component {

  state = {
    firstName: 'Jean',
  };

  onPrenomChangeHandler = (firstName) => {
    this.setState({
      firstName,
    });
  };

  render() {
    return (
      <div>
        <FormPrenom onPrenomChange={this.onPrenomChangeHandler}/>
        <Hello name={this.state.firstName}/>
      </div>
    );
  }
}

export {
  ContainerPrenom,
};
