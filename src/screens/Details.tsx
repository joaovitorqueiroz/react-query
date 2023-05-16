import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {UserDetails, ModalEditUser} from '../components';
import {User} from '../models';

const Details = () => {
  const [showModal, setShowModal] = useState(false);

  const onSave = () => {
    setShowModal(false);
  };

  const onCancel = () => {
    setShowModal(false);
  };

  const onEdit = () => {
    setShowModal(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <UserDetails onEdit={onEdit} />
      <ModalEditUser
        isVisible={showModal}
        user={
          {
            name: 'teste',
            bio: 'dasdsadas',
          } as User
        }
        onCancel={onCancel}
        onSave={onSave}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default Details;
