import React from 'react';
import PropTypes from 'prop-types';

import { cocktailPropType } from '../cocktail-prop-types';

import Item from './Item';

import './List.css';

const List = ({ cocktails }) => (
  <div className="cocktails">
    {cocktails.map(cocktail => <Item cocktail={cocktail} key={cocktail.id} />)}
  </div>
);

List.propTypes = {
  cocktails: PropTypes.arrayOf(cocktailPropType),
};

List.defaultProps = {
  cocktails: [],
};

export default List;
