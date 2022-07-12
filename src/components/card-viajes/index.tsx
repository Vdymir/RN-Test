import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../styles/color';

interface Props {
  status: 'encurso' | 'despachado' | 'planificado';
  num_transport: string | number;
  origin: string;
  destiny: string;
}

export default function CardViajes({
  destiny,
  num_transport,
  origin,
  status,
}: Props) {
  const resolveColor = () => {
    if (status === 'encurso') return '#0DB030';
    return status === 'despachado' ? '#010066' : '#FFB800';
  };

  return (
    <View style={styles.main}>
      <View
        style={{
          ...styles.header,
          backgroundColor: resolveColor(),
        }}>
        <Text style={styles.text_header}>{status}</Text>
        <Text style={styles.text_header}>N. Transporte {num_transport}</Text>
      </View>
      <View style={styles.body}>
        <View>
          <Text style={styles.title}>Origen</Text>
          <Text style={styles.sub_title}>{origin}</Text>
        </View>
        <View>
          <Text style={styles.title}>Destino</Text>
          <Text style={styles.sub_title}>{destiny}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    marginBottom: 20,
  },
  header: {
    backgroundColor: colors.blue,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  text_header: {
    color: colors.white,
    fontSize: 16,
    textTransform: 'capitalize',
  },
  body: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  title: {
    color: colors.gray,
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
  },
  sub_title: {
    color: colors.black,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'left',
  },
});
