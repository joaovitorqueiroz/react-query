import React from 'react';
import {View, FlatList, Text, Image, StyleSheet} from 'react-native';
import {User} from '../models';

type Props = {
  item: User;
};

const renderUserItem = ({item}: Props) => (
  <View style={styles.userItem}>
    <Image style={styles.avatar} source={{uri: item.avatar}} />
    <Text style={styles.userName}>{item.name}</Text>
  </View>
);

const UserList = () => {
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
        renderItem={renderUserItem}
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
