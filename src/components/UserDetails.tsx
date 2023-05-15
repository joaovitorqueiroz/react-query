import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const UserDetailsScreen = () => {
  const user = {
    createdAt: '2023-05-14T12:50:12.164Z',
    name: 'Kenny Connelly',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/182.jpg',
    bio: 'Quam quasi dolor fuga deserunt tenetur sed ab tempore voluptatem. Id quidem aliquid vel beatae dolore. Nam deserunt ratione perferendis aut pariatur. Voluptatem maxime esse sed quae itaque. Neque esse at praesentium voluptatum magnam.',
    id: '4',
  };

  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={{uri: user.avatar}} />
      <Text style={styles.userName}>{user.name}</Text>
      <Text style={styles.bioInput}>{user.bio}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bioInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginTop: 20,
    padding: 10,
    textAlignVertical: 'center',
  },
});

export default UserDetailsScreen;
