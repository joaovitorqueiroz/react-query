import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {UserList} from '../components';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <UserList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default Home;
