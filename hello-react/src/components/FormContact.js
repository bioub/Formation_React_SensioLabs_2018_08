import React, { Component } from 'react';

class FormContact extends Component {

  state = {
    firstName: 'Jean',
    lastName: 'Dupont',
  };

  onChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <p>
          Prénom : <input value={this.state.firstName} onChange={this.onChangeHandler} name="firstName" />
        </p>
        <p>
          Nom : <input value={this.state.lastName} onChange={this.onChangeHandler} name="lastName" />
        </p>
        <p>
          <button>Inscription</button>
        </p>
      </form>
    );
  }

}

export {
  FormContact,
};
