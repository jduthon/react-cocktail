import React from 'react';
import PropTypes from 'prop-types';
import * as FontAwesome from 'react-icons/lib/fa';

const Icon = ({ name, ...props }) =>
  React.createElement(FontAwesome[name], props);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;

