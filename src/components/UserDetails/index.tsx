import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Avatar from '../Avatar';
import {User} from '../../models';
import styles from './styles';

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

export default UserDetails;
