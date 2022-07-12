import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CardViajes from '../../components/card-viajes';
import colors from '../../styles/color';

export default function Home() {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Viajes</Text>
      </View>
      <View style={styles.body}>
        <CardViajes
          destiny="Mar de plata"
          status="despachado"
          num_transport={473849837}
          origin="Santiago"
        />
        <CardViajes
          destiny="Mar de plata"
          status="encurso"
          num_transport={473849837}
          origin="Santiago"
        />
        <CardViajes
          destiny="Mar de plata"
          status="planificado"
          num_transport={473849837}
          origin="Santiago"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.blue,
    height: 70,
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
    width: '100%',
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    marginTop: -20,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
});
