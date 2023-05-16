import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Avatar from './Avatar';
import {User} from '../models';

type UserDetailsProps = {
  onEdit: () => void;
  user: User | undefined;
};

const UserDetails = ({onEdit, user}: UserDetailsProps) => {
  return (
    <View style={styles.container}>
      <Avatar url={user?.avatar} />
      <Text style={styles.userName}>{user?.name}</Text>
      <Text style={styles.bioInput}>{user?.bio}</Text>

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
