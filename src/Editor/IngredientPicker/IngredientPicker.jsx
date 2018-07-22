import React from 'react';

const IngredientPicker = ({ ingredients, ...props }) => (
  <select {...props}>
    {ingredients.map(({ id, name }) => (
      <option key={id} value={id}>
        {name}
      </option>
    ))}
  </select>
);

export default IngredientPicker;
