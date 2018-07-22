import React from 'react';
import { Formik, Form as FormikForm } from 'formik';

import { getInitialValues } from '../utils';

import Inputs from '../Inputs';

const Form = ({ inputDefinition, onSubmit }) => (
  <Formik initialValues={getInitialValues(inputDefinition)} onSubmit={onSubmit}>
    {props => (
      <FormikForm>
        <Inputs formikProps={props} inputDef={inputDefinition} />
        <button type="submit" disabled={props.isSubmitting}>
          Submit
        </button>
      </FormikForm>
    )}
  </Formik>
);

export default Form;
