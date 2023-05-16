import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Avatar from './Avatar';

type UserDetailsProps = {
  onEdit: () => void;
};

const UserDetails = ({onEdit}: UserDetailsProps) => {
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
      <Avatar />
      <Text style={styles.userName}>{user.name}</Text>
      <Text style={styles.bioInput}>{user.bio}</Text>

      <TouchableOpacity style={styles.editButton} onPress={onEdit}>
        <Text style={styles.buttonText}>Editar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
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
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  editButton: {
    backgroundColor: '#87aade',
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});

export default UserDetails;
