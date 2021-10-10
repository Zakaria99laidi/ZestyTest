import React, {FC} from 'react';
import {TextInput, View, StyleSheet, Text} from 'react-native';

import defaultStyles from '../config/defaultStyles';

interface Props {
  placeholder: string;
  style?: object;
  width?: string;
}

const AppTextInput: FC<Props> = ({
  placeholder,
  style,
  width = '100%',
  ...otherProps
}) => {
  return (
    <View style={[styles.container, style, {width}]}>
      <TextInput
        style={[defaultStyles.text, styles.zoneInput]}
        placeholder={placeholder}
        placeholderTextColor={defaultStyles.colors.medium}
        {...otherProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  zoneInput: {
    flex: 1,
  },
});

export default AppTextInput;
