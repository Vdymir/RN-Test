import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import getTrips from '../../api/viajes';
import CardViajes from '../../components/card-viajes';
import {Viajes} from '../../interfaces/viajes';
import colors from '../../styles/color';

export default function Home() {
  const [trips, setTrips] = useState<Viajes[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const result = await getTrips();
      console.log(result)
      setIsLoading(false);
      if (typeof result === 'string') {
      } else setTrips(result);
    })();
  }, []);

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Viajes</Text>
      </View>
      <View style={styles.body}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          trips.map(trip => (
            <CardViajes
              key={trip.id}
              destiny={trip.localidadDestino.nombre}
              status={trip.estado}
              num_transport={trip.transportista_id}
              origin={trip.localidadOrigen.nombre}
            />
          ))
        )}
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
