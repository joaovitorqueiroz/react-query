import React, {useEffect, useState} from 'react';
import {View, FlatList, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {User} from '../../models';
import {getUserList} from '../../services/api/user';
import styles from './styles';
import Time from '../Time';

type Props = {
  user: User;
  onPress: (id: string) => void;
};

const UserItem = ({user, onPress}: Props) => (
  <TouchableOpacity onPress={() => onPress(user.id)}>
    <View style={styles.userItem}>
      <Image style={styles.avatar} source={{uri: user.avatar}} />
      <Text style={styles.userName}>{user.name}</Text>
    </View>
  </TouchableOpacity>
);

const UserList = () => {
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
    <View style={styles.container}>
      <Text style={styles.headerText}> Lista de usuário</Text>
      <Time />
      <FlatList
        data={data}
        renderItem={({item}) => <UserItem user={item} onPress={onPress} />}
        keyExtractor={item => item.id}
        style={styles.containerFlatList}
      />
    </View>
  );
};

export default UserList;
