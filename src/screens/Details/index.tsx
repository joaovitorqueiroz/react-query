import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {UserDetails, ModalEditUser} from '../../components';
import {EditUser} from '../../services/api/user';
import {useRoute} from '@react-navigation/native';
import {DetailsParams} from '../../@types/navigation';
import styles from './styles';
import {useEditUser, useGetUserDetails} from '../../queries/user';

const Details = () => {
  const [showModal, setShowModal] = useState(false);
  const route = useRoute();
  const {id} = route.params as DetailsParams;
  const {isLoading, isError, data} = useGetUserDetails(id);
  const {mutate: editUser} = useEditUser();

  const onSave = (user: EditUser) => {
    editUser(user);
    setShowModal(false);
  };

  const onCancel = () => {
    setShowModal(false);
  };

  const onEdit = () => {
    setShowModal(true);
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
    <SafeAreaView style={styles.container}>
      <UserDetails onEdit={onEdit} user={data} />
      <ModalEditUser
        isVisible={showModal}
        user={data}
        onCancel={onCancel}
        onSave={onSave}
      />
    </SafeAreaView>
  );
};

export default Details;
