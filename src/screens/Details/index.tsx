import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {UserDetails, ModalEditUser} from '../../components';
import {User} from '../../models';
import {EditUser, editUser, getUserDetail} from '../../services/api/user';
import {useRoute} from '@react-navigation/native';
import {DetailsParams} from '../../@types/navigation';
import styles from './styles';

const Details = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(undefined);
  const [data, setData] = useState<User>();

  const route = useRoute();
  const {id} = route.params as DetailsParams;

  const fetch = useCallback(() => {
    setIsLoading(true);
    getUserDetail(id)
      .then(_data => {
        setError(undefined);
        setData(_data);
      })
      .catch(_error => setError(_error))
      .finally(() => setIsLoading(false));
  }, [id]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  const onSave = (user: EditUser) => {
    editUser(user).then(() => {
      fetch();
    });

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

  if (error) {
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
