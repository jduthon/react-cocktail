import React from 'react';

const capitalize = w => `${w[0].toUpperCase()}${w.slice(1)}`;

const Inputs = ({
  formikProps: { values, errors, touched, handleChange, handleBlur },
  inputDef,
  extraProps = {},
}) =>
  Object.keys(values).map(key => {
    const {
      component = 'input',
      type,
      placeholder = capitalize(key),
    } = inputDef[key];
    const currentExtraProps = extraProps[key] || {};
    return (
      <React.Fragment key={key}>
        {React.createElement(component, {
          ...currentExtraProps,
          name: key,
          onChange: handleChange,
          onBlur: handleBlur,
          value: values[key],
          placeholder,
          ...(type ? { type } : {}),
        })}
        {touched[key] && errors[key] && <div>{errors[key]}</div>}
      </React.Fragment>
    );
  });

export default Inputs;
