import React, {FC} from 'react';
import {View, StyleSheet, ImageSourcePropType, Image} from 'react-native';
import colors from '../config/colors';
import AppText from './Text';

interface Props {
  title?: string;
  image?: string;
  style?: object;
}
const Post: FC<Props> = ({
  title = 'test',
  image = 'https://coffee.alexflipnote.dev/ZMe91-W9O-w_coffee.jpg',
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <AppText style={styles.title}>{title}</AppText>
      <Image source={{uri: image}} style={styles.image} resizeMode="cover" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  title: {
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 300,
    borderWidth: 1,
    borderColor: colors.medium,
  },
});

export default Post;
