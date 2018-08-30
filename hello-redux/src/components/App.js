import React, { Component } from 'react';
import { Hello } from './Hello';
import { Clock, ClockDesactivable } from './Clock';
import { FormContact } from './FormContact';
import { ContainerPrenom } from './ContainerPrenom';
import { ListButtonDesactivable } from './ListButtonDesactivable'

class App extends Component {
  render() {
    return (
      <div>
        <Hello name="Romain"/>
        <Hello/>
        <hr/>
        <Clock/>
        <hr/>
        <FormContact/>
        <hr/>
        <ContainerPrenom/>
        <hr/>
        <ClockDesactivable/>
        <hr/>
        <ListButtonDesactivable/>
      </div>
    );
  }
}

export { App };
