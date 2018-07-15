import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import CocktailsList from './List';

const cocktailsQuery = gql`
  {
    cocktails {
      abv
      id
      favourited
      name
      photo
      rating
      description
      missingNumber
      ingredients {
        id
        name
        quantity
      }
    }
  }
`;

const CocktailsQuery = () => (
  <Query query={cocktailsQuery}>
    {({ loading, error, data: { cocktails } = {} }) => {
      console.log(error);
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      console.log(cocktails);

      return <CocktailsList cocktails={cocktails} />;
    }}
  </Query>
);

export default CocktailsQuery;
