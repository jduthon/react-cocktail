import React from 'react';

import Icon from '../Icon';
import Measurement from '../Measurement';

import { cocktailPropType } from '../cocktail-prop-types';

import './Item.css';

const Item = ({ cocktail }) => {
  const {
    abv,
    description,
    ingredients,
    favourited,
    name,
    missingNumber,
    photo,
    rating,
  } = cocktail;

  return (
    <div className="cocktail-item">
      <img
        alt={`${name}'s photo`}
        className="cocktail-item__photo"
        src={photo}
      />
      <div className="cocktail-item__content">
        <div className="cocktail-item__name">{name}</div>
        <ul className="cocktail-item__ingredients">
          {ingredients.map(ingredient => (
            <li key={ingredient.id}>
              <Measurement
                className="cocktail-item__ingredient__measurement"
                clMeasurement={ingredient.quantity}
              />{' '}
              <span className="cocktail-item__ingredient__name">
                {ingredient.ingredient.name.toLowerCase()}
              </span>
            </li>
          ))}
        </ul>
        <div className="cocktail-item__footer">
          <Icon name={favourited ? 'FaHeart' : 'FaHeartO'} />
          <span className="cocktail-item__missing">{missingNumber}</span>
          <span className="cocktail-item__abv">{abv}</span>
          <span className="cocktail-item__rating">{rating}</span>
        </div>
      </div>
    </div>
  );
};

Item.propTypes = {
  cocktail: cocktailPropType.isRequired,
};

export default Item;
