import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../styles/color';
import {Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Ajustes() {
  const navigate = useNavigation();
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.title}>Ajustes</Text>
      </View>
      <View style={styles.body}>
        <Pressable onPress={() => navigate.navigate('Login' as any)}>
          <Text style={styles.text}>Cerrar sesión</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.text}>Version de la App 1.0</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  header: {
    backgroundColor: colors.blue,
    height: 200,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  title: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '900',
    marginTop: -10,
  },
  body: {
    height: '100%',
    width: '90%',
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    marginTop: -150,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 20,
    paddingTop: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 15,
  },
});
