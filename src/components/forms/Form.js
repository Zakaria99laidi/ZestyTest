import React from 'react';
// import {GestureResponderEvent} from 'react-native';
import {Formik} from 'formik';

// interface Props {
//   initialValues: object;
//   validationSchema: object;
//   onSubmit: (event: GestureResponderEvent) => void;
// }

const AppForm = ({initialValues, onSubmit, validationSchema, children}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {() => <>{children}</>}
    </Formik>
  );
};

export default AppForm;
