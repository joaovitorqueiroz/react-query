import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {useGetTime} from '../../queries/timer';

const Time = () => {
  const {data: time} = useGetTime();

  return (
    <View style={styles.container}>
      <Text>{time}</Text>
    </View>
  );
};

export default Time;
