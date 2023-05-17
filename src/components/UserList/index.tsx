import React from 'react';
import {View, FlatList, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {User} from '../../models';
import styles from './styles';
import Time from '../Time';
import {useGetUserList} from '../../queries/user';

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
