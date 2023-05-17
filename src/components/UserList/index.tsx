import React from 'react';
import {View, FlatList, Text, Image, TouchableOpacity} from 'react-native';
import {User} from '../../models';
import styles from './styles';
import Time from '../Time';

type UserItemProps = {
  user: User;
  onPress: (id: string) => void;
};

const UserItem = ({user, onPress}: UserItemProps) => (
  <TouchableOpacity onPress={() => onPress(user.id)}>
    <View style={styles.userItem}>
      <Image style={styles.avatar} source={{uri: user.avatar}} />
      <Text style={styles.userName}>{user.name}</Text>
    </View>
  </TouchableOpacity>
);

type UserListProps = {
  users: User[];
  onPress: (id: string) => void;
};

const UserList = ({users, onPress}: UserListProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}> Lista de usuário</Text>
      <Time />
      <FlatList
        data={users}
        renderItem={({item}) => <UserItem user={item} onPress={onPress} />}
        keyExtractor={item => item.id}
        style={styles.containerFlatList}
      />
    </View>
  );
};

export default UserList;
