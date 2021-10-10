import {useFormikContext} from 'formik';
import React from 'react';

import Button from '../Button';

function SubmitButton({title, width, ...otherProps}) {
  const {handleSubmit} = useFormikContext();
  return (
    <Button
      title={title}
      onPress={handleSubmit}
      width={width}
      {...otherProps}
    />
  );
}

export default SubmitButton;
