import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

import Form from '../Form';

import CocktailIngredients from './CocktailIngredients';

const CREATE_COCKTAIL = gql`
  mutation createCocktail(
    $name: String!
    $ingredients: [CocktailIngredient!]!
    $description: String!
    $photo: String!
  ) {
    createCocktail(
      name: $name
      ingredients: $ingredients
      photo: $photo
      description: $description
    ) {
      id
      name
      ingredients
      photo
      description
    }
  }
`;

const cocktailFieldsDefinition = {
  name: {
    initial: '',
    type: 'text',
  },
  photo: {
    initial: '',
    type: 'text',
  },
  description: {
    initial: '',
    component: 'textarea',
  },
  ingredients: {
    component: CocktailIngredients,
    initial: [],
  },
};

class CocktailForm extends React.Component {
  render() {
    return (
      <Mutation mutation={CREATE_COCKTAIL}>
        {(createCocktail, { data }) => (
          <Form
            inputDefinition={cocktailFieldsDefinition}
            onSubmit={(values, { setSubmitting, setErrors }) => {
              createCocktail(values).then(
                cocktail => {
                  setSubmitting(false);
                  console.log(cocktail);
                },
                errors => {
                  setSubmitting(false);
                  console.log(errors);
                }
              );
            }}
          />
        )}
      </Mutation>
    );
  }
}

export default CocktailForm;
