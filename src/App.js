import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CocktailList from './CocktailList';

const bramble = {
  // This is wrong
  abv: 20,
  description:
    'The Bramble is a cocktail created by Dick Bradsell in 1980s London, England.',
  id: '1',
  ingredients: [
    {
      id: '1',
      label: 'Gin',
      quantity: 4,
    },
    {
      id: '2',
      label: 'Lemon juice',
      quantity: 1.5,
    },
    {
      id: '3',
      label: 'Simple syrup',
      quantity: 1,
    },
    {
      id: '4',
      label: 'Creme de Mure',
      quantity: 1.5,
    },
  ],
  favourited: false,
  name: 'Bramble',
  missingNumber: 1,
  photo:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Bramble_Cocktail1.jpg/640px-Bramble_Cocktail1.jpg',
  rating: 4,
};

const martini = {
  // This is wrong
  abv: 34,
  description:
    'The martini is a cocktail made with gin and vermouth, and garnished with an olive or a lemon twist.',
  id: '2',
  ingredients: [
    {
      id: '1',
      label: 'Gin',
      quantity: 6,
    },
    {
      id: '5',
      label: 'Vermouth',
      quantity: 1,
    },
  ],
  favourited: true,
  name: 'Martini',
  missingNumber: 0,
  photo:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/15-09-26-RalfR-WLC-0084.jpg/640px-15-09-26-RalfR-WLC-0084.jpg?1524511351503',
  rating: 3.5,
};

const yellowBird = {
  // This is wrong
  abv: 31,
  description: 'Yellow Bird is a Caribbean cocktail beverage.',
  id: '3',
  ingredients: [
    {
      id: '6',
      label: 'White Rum',
      quantity: 3,
    },
    {
      id: '7',
      label: 'Galliano',
      quantity: 1.5,
    },
    {
      id: '8',
      label: 'Triple Sec',
      quantity: 1.5,
    },
    {
      id: '2',
      label: 'Lemon Juice',
      quantity: 1.5,
    },
  ],
  favourited: false,
  name: 'Yellow Bird',
  missingNumber: 1,
  photo: 'http://www.completecocktails.com/img/d/l/YellowBird.jpg',
  rating: 2,
};

const cocktails = [bramble, martini, yellowBird];

class App extends Component {
  render() {
    return (
      <div className="App">
        <CocktailList cocktails={cocktails} />
      </div>
    );
  }
}

export default App;
