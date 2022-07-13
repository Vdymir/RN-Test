import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import colors from '../../styles/color';
import userLogin from '../../api/login';
import Button from '../../components/button';

export default function Login() {
  const {navigate} = useNavigation();
  const [dni, setDni] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState({
    open: false,
    message: '',
  });

  const onPress = async () => {
    if (dni.trim().length === 0 || password.trim().length === 0) {
      setShowModal({
        open: true,
        message: 'Todos los campos son obligatorios...',
      });
    } else {
      const response = await userLogin({
        dni,
        email: 'correct@example.com',
        password,
      });
      if (typeof response === 'string') {
        setShowModal({
          open: true,
          message: response as unknown as string,
        });
      } else navigate('Home' as any);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        keyboardType="numeric"
        textAlign="center"
        placeholder="DNI"
        value={dni}
        onChangeText={setDni}
      />
      <TextInput
        style={styles.textInput}
        textAlign="center"
        secureTextEntry
        placeholder="PASSWORD"
        value={password}
        onChangeText={setPassword}
      />
      <View style={{width: '70%'}}>
        <Button title="Ingresar" onPress={onPress} />
      </View>
      <Modal
        animationType="fade"
        visible={showModal.open}
        transparent
        onRequestClose={() => {
          setShowModal({
            open: false,
            message: '',
          });
        }}>
        <View style={styles.container_modal}>
          <View style={styles.box}>
            <Text style={styles.text_modal}>{showModal.message}</Text>
            <Button
              title="Cerrar"
              primary={false}
              onPress={() =>
                setShowModal({
                  open: false,
                  message: '',
                })
              }
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    backgroundColor: colors.green_light,
    width: '70%',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  container_modal: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  box: {
    width: '80%',
    paddingVertical: 30,
    paddingHorizontal: 10,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  text_modal: {
    fontSize: 16,
  },
});
