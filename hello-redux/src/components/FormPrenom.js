import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormPrenom extends Component {

  state = {
    firstName: 'Jean',
  };

  onChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    this.props.onPrenomChange(event.target.value); // emit
  };

  render() {
    return (
      <form>
        <p>
          Prénom : <input value={this.state.firstName} onChange={this.onChangeHandler} name="firstName"/>
        </p>
      </form>
    );
  }

}

FormPrenom.propTypes = {
  onPrenomChange: PropTypes.func.isRequired,
};

export {
  FormPrenom,
};
