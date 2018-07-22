import PropTypes from 'prop-types';

const ingredientPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
});

export const cocktailIngredientPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  ingredient: ingredientPropType.isRequired,
});

export const cocktailPropType = PropTypes.shape({
  abv: PropTypes.number,
  description: PropTypes.string,
  id: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(cocktailIngredientPropType),
  favourited: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  missingNumber: PropTypes.number.isRequired,
  photo: PropTypes.string,
  rating: PropTypes.number,
});

export const cocktailDefaultPropType = {
  description: null,
  photo: null,
  rating: null,
};
