import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const ingredientsQuery = gql`
  {
    allIngredients {
      id
      name
    }
  }
`;

const IngredientsQuery = ({ children }) => (
  <Query query={ingredientsQuery}>
    {({ loading, error, data: { allIngredients } = {} }) => {
      console.log(error);
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return children({ allIngredients });
    }}
  </Query>
);

export default IngredientsQuery;
