import React from 'react';
import { Formik, FieldArray } from 'formik';

import { makeWithIndirection } from '../utils';

import Inputs from '../Inputs';
import IngredientPicker from '../IngredientPicker';
import IngredientsQuery from './IngredientsQuery';

const cocktailIngredientFieldsDefinition = {
  quantity: {
    type: 'number',
    initial: 0,
  },
  id: {
    component: IngredientPicker,
    initial: {},
  },
};

const CocktailIngredients = ({
  name,
  onChange,
  onBlur,
  value,
  placeholder,
}) => {
  const makeWithIndexIndirection = makeWithIndirection(name);
  return (
    <FieldArray name={name}>
      {arrayHelpers => (
        <React.Fragment>
          <IngredientsQuery>
            {({ allIngredients }) =>
              value.length > 0 &&
              value.map((cocktailIngredient, index) => {
                const withIndirection = makeWithIndexIndirection(index);
                return (
                  <React.Fragment key={index}>
                    <Inputs
                      formikProps={props}
                      inputDef={withIndirection(
                        cocktailIngredientFieldsDefinition
                      )}
                      extraProps={withIndirection({
                        id: { ingredients: allIngredients },
                      })}
                    />
                    <button
                      type="button"
                      onClick={() => arrayHelpers.remove(index)}
                    >
                      -
                    </button>
                  </React.Fragment>
                );
              })
            }
          </IngredientsQuery>

          <button type="button" onClick={() => arrayHelpers.push({})}>
            Add an ingredient
          </button>
        </React.Fragment>
      )}
    </FieldArray>
  );
};

export default CocktailIngredients;
