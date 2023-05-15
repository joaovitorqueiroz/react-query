import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {UserDetails} from '../components';

const Details = () => {
  return (
    <SafeAreaView style={styles.container}>
      <UserDetails />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default Details;
