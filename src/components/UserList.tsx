import React from 'react';
import {
  View,
  FlatList,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {User} from '../models';

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
  const navigation = useNavigation();
  const onPress = (id: string) => {
    navigation.navigate('details', {id});
  };

  const users = [
    {
      createdAt: '2023-05-14T12:50:12.164Z',
      name: 'Kenny Connelly',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/182.jpg',
      bio: 'Quam quasi dolor fuga deserunt tenetur sed ab tempore voluptatem. Id quidem aliquid vel beatae dolore. Nam deserunt ratione perferendis aut pariatur. Voluptatem maxime esse sed quae itaque. Neque esse at praesentium voluptatum magnam.',
      id: '4',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}> Lista de Usuarios</Text>
      <FlatList
        data={users}
        renderItem={({item}) => <UserItem user={item} onPress={onPress} />}
        keyExtractor={item => item.id.toString()}
        style={styles.containerFlatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerFlatList: {
    flex: 1,
    padding: 20,
  },
  headerText: {
    alignSelf: 'center',
    fontSize: 24,
  },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UserList;
