import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import CocktailsList from './List';

const cocktailsQuery = gql`
  {
    allCocktails {
      id
      favourited
      name
      photo
      rating
      description
      missingNumber
      ingredients {
        id
        ingredient {
          id
          name
        }
        quantity
      }
    }
  }
`;

const CocktailsQuery = () => (
  <Query query={cocktailsQuery}>
    {({ loading, error, data: { allCocktails } = {} }) => {
      console.log(error);
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      console.log(allCocktails);

      return <CocktailsList cocktails={allCocktails} />;
    }}
  </Query>
);

export default CocktailsQuery;
