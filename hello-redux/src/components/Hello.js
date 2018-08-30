import React from 'react';
import PropTypes from 'prop-types';

const Hello = ({name = 'Jean'}) => <div className="Hello">Hello {name}</div>;

Hello.propTypes = {
  name: PropTypes.string,
};

/*
Hello.defaultProps = {
  name: 'Jean',
};
*/

export {
  Hello,
}
