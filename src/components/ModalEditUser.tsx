import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Modal,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {User} from '../models';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '80%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  cancelButton: {
    marginRight: 10,
    borderColor: 'gray',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonTextCancel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
  },
  saveButton: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});

export default EditUserModal;
