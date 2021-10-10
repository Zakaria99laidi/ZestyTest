import React, {FC} from 'react';
import {Text} from 'react-native';

import defaultStyles from '../config/defaultStyles';

interface Props {
  style?: object;
}

const AppText: FC<Props> = ({children, style, ...otherProps}) => {
  return (
    <Text style={[defaultStyles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
};

export default AppText;
