import React, {useState} from 'react';
import {useQueryClient} from '@tanstack/react-query';
import {View, Text, SafeAreaView} from 'react-native';
import {UserDetails, ModalEditUser} from '../../components';
import {EditUser} from '../../services/api/user';
import {useRoute} from '@react-navigation/native';
import {DetailsParams} from '../../@types/navigation';
import styles from './styles';
import {
  useEditUser,
  useGetUserDetails,
  QUERY_KEY_USER_LIST,
  QUERY_KEY_USER_DETAILS,
} from '../../queries/user';

const Details = () => {
  const [showModal, setShowModal] = useState(false);
  const route = useRoute();
  const {id} = route.params as DetailsParams;
  const {isLoading, isError, data} = useGetUserDetails(id);
  const {mutate: editUser} = useEditUser();
  const queryClient = useQueryClient();

  const onSave = (user: EditUser) => {
    editUser(user, {
      onSuccess: () => {
        queryClient.invalidateQueries({queryKey: [QUERY_KEY_USER_LIST]});
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEY_USER_DETAILS, user.id],
        });
      },
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
