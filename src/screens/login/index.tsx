import {
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

export default function Login() {
  const navigation = useNavigation();
  const [dni, setDni] = useState('');
  const [password, setPassword] = useState('');

  const onPress = async () => {
    const response = await userLogin({
      dni,
      email: 'correct@example.com',
      password,
    });
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

      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => navigation.navigate('Home' as any)}>
        <View style={styles.button}>
          <Text style={styles.text}>Ingresar</Text>
        </View>
      </TouchableOpacity>
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
  touchableOpacity: {
    width: '70%',
  },
  button: {
    width: '100%',
    backgroundColor: colors.button_green,
    paddingVertical: 15,
    borderRadius: 8,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});
