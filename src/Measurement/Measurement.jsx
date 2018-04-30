import React from 'react';
import PropTypes from 'prop-types';

const Measurement = ({ className, clMeasurement }) => (
  <span className={`Measurement ${className}`}>{clMeasurement}cl</span>
);

Measurement.propTypes = {
  className: PropTypes.string,
  clMeasurement: PropTypes.number.isRequired,
};

Measurement.defaultProps = {
  className: '',
};

export default Measurement;
