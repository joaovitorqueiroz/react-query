import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {UserList} from '../../components';
import styles from './styles';
import {useGetUserList} from '../../queries/user';

const Home = () => {
  const {isLoading, isError, data} = useGetUserList();

  const navigation = useNavigation();
  const onPress = (id: string) => {
    navigation.navigate('details', {id});
  };

  if (isLoading) {
    return (
      <View style={styles.containerContent}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.containerContent}>
        <Text>Ops... Algo deu errado!</Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <UserList users={data} onPress={onPress} />
    </SafeAreaView>
  );
};

export default Home;
