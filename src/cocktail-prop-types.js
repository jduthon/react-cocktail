import PropTypes from 'prop-types';

export const ingredientPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
});

export const cocktailPropType = PropTypes.shape({
  abv: PropTypes.number.isRequired,
  description: PropTypes.string,
  id: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(ingredientPropType),
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
