export const getInitialValues = def =>
  Object.keys(def).reduce(
    (initialValues, key) => ({
      ...initialValues,
      [key]: def[key].initial,
    }),
    {}
  );

export const makeWithIndirection = indirection => index => props =>
  Object.keys(props).reduce(
    (propsWithIndirection, key) => ({
      ...propsWithIndirection,
      [`${indirection}[${index}].${key}`]: props[key],
    }),
    {}
  );
