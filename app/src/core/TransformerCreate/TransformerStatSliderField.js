import React from 'react';
import PropTypes from 'prop-types';

const TransformerStatSliderField = ({ name, value, onChange }) => (
  <div>
    <label htmlFor={name}>{name}</label>
    <div>
      <input name={name} type="range" min="1" max="10" value={value} onChange={onChange} />
      <span>{value}</span>
    </div>
  </div>
);

TransformerStatSliderField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TransformerStatSliderField;
