import React, {useState, useEffect} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import {UserList} from '../../components';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {User} from '../../models';
import {getUserList} from '../../services/api/user';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(undefined);
  const [data, setData] = useState<User[]>();

  useEffect(() => {
    setIsLoading(true);
    getUserList()
      .then(_data => {
        setError(undefined);
        setData(_data);
      })
      .catch(_error => setError(_error))
      .finally(() => setIsLoading(false));
  }, []);

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

  if (error) {
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
