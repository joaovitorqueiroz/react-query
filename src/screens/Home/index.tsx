import React from 'react';
import {SafeAreaView} from 'react-native';
import {UserList} from '../../components';
import styles from './styles';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <UserList />
    </SafeAreaView>
  );
};

export default Home;
