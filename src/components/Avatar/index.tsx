import React from 'react';
import {Image} from 'react-native';
import styles from './styles';

type AvatarProps = {
  url: string | undefined;
};

const Avatar = ({url}: AvatarProps) => {
  return <Image style={styles.avatar} source={{uri: url}} />;
};

export default Avatar;
