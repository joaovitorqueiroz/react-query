import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {getTime} from '../../services/api/time';
import styles from './styles';

const Time = () => {
  const [time, setTime] = useState<string>();

  useEffect(() => {
    const interval = setInterval(() => {
      getTime().then(_time => setTime(_time));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text>{time}</Text>
    </View>
  );
};

export default Time;
