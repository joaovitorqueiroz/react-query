import React from 'react';
import {Image, StyleSheet} from 'react-native';

type AvatarProps = {
  url: string | undefined;
};

const Avatar = ({url}: AvatarProps) => {
  return <Image style={styles.avatar} source={{uri: url}} />;
};

const styles = StyleSheet.create({
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
});
export default Avatar;
