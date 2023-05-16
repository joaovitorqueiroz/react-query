import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {getTime} from '../services/api/time';

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

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
export default Time;
