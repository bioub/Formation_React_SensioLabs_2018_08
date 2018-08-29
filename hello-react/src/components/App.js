import React, { Component } from 'react';
import { Hello } from './Hello';
import { Clock } from './Clock';
import { ButtonCountable } from './ButtonCountable';
import {FormContact} from "./FormContact";
import {ContainerPrenom} from "./ContainerPrenom";

class App extends Component {
  render() {
    return (
      <div>
        <Hello name="Romain" />
        <Hello />
        <hr />
        <Clock />
        <hr />
        <ButtonCountable />
        <hr />
        <FormContact/>
        <hr />
        <ContainerPrenom/>
      </div>
    );
  }
}

export default App;
