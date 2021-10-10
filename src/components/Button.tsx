import React, {FC} from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import defaultStyles from '../config/defaultStyles';
import Text from './Text';

interface Props {
  title: string;
  color?: string;
  width?: string;
  onPress?: (event: GestureResponderEvent) => void;
  style?: object;
  styleTitle?: object;
}

const AppButton: FC<Props> = ({
  title,
  color = 'yellow',
  width,
  onPress,
  style,
  styleTitle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.buttonContainer,
        {backgroundColor: defaultStyles.colors[color], width: width},
        style,
      ]}>
      <Text style={[defaultStyles.text, styles.title, styleTitle]}>
        {' '}
        {title}{' '}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  title: {
    color: defaultStyles.colors.white,
    fontWeight: 'bold',
    fontSize: 20,
    textTransform: 'capitalize',
  },
});

export default AppButton;
