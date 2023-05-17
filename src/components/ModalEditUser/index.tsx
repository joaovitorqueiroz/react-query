import React, {useState} from 'react';
import {View, Text, TextInput, Modal, TouchableOpacity} from 'react-native';
import {User} from '../../models';
import styles from './styles';

type EditUserModalProps = {
  isVisible: boolean;
  user: User | undefined;
  onSave: (updatedUser: any) => void;
  onCancel: () => void;
};

const EditUserModal = ({
  isVisible,
  user,
  onSave,
  onCancel,
}: EditUserModalProps) => {
  const [name, setName] = useState<string>(user?.name || '');
  const [bio, setBio] = useState<string>(user?.bio || '');

  const handleSave = () => {
    const updatedUser = {id: user?.id, name, bio};
    onSave(updatedUser);
  };

  return (
    <Modal visible={isVisible} animationType="fade" transparent>
      <View style={styles.container}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Editar usuário</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Bio"
            value={bio}
            onChangeText={setBio}
            multiline
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
              <Text style={styles.buttonTextCancel}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default EditUserModal;
