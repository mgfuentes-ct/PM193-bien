import React, { useState } from 'react';
import './fixInsetsEvent';

import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  Alert,
} from 'react-native';
import axios from 'axios';

export default function App() {
  const [comida, setComida] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [restaurantes, setRestaurantes] = useState([]);
  const [loading, setLoading] = useState(false);

  const buscarRestaurantes = async () => {
    if (!ciudad) {
      Alert.alert('Error', 'Por favor ingresa una ciudad.');
      return;
    }

    setLoading(true);
    setRestaurantes([]);

    try {
      // Obtener coordenadas de la ciudad desde Nominatim
      const nominatimUrl = 'https://nominatim.openstreetmap.org/search ';
      const locationRes = await axios.get(nominatimUrl, {
        params: {
          q: ciudad,
          format: 'json',
          limit: 1,
        },
        headers: {
          'Accept-Language': 'en',
          'User-Agent': 'ReactNativeApp/1.0',
        },
      });

      if (!locationRes.data.length) {
        throw new Error('Ciudad no encontrada');
      }

      const { lat, lon } = locationRes.data[0];

      // Construir la consulta de Overpass
      const overpassQuery = `
[out:json][timeout:25];
(
  node["amenity"="restaurant"]${comida ? `["cuisine"~"${comida}",i]` : ''}(around:5000,${lat},${lon});
  way["amenity"="restaurant"]${comida ? `["cuisine"~"${comida}",i]` : ''}(around:5000,${lat},${lon});
  relation["amenity"="restaurant"]${comida ? `["cuisine"~"${comida}",i]` : ''}(around:5000,${lat},${lon});
);
out center;
      `;

      const overpassUrl = 'https://overpass-api.de/api/interpreter ';
      const overpassRes = await axios.post(overpassUrl, overpassQuery, {
        headers: {
          'Content-Type': 'text/plain',
        },
      });

      if (!overpassRes.data || !overpassRes.data.elements || !overpassRes.data.elements.length) {
        Alert.alert('Sin resultados', 'No se encontraron restaurantes para esa búsqueda.');
        setLoading(false);
        return;
      }

      setRestaurantes(overpassRes.data.elements);
    } catch (err) {
      console.error('Error:', err.message);
      Alert.alert('Error', 'No se pudo realizar la búsqueda. Intenta de nuevo.');
    }

    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍽 Buscador de Restaurantes</Text>
      <TextInput
        style={styles.input}
        placeholder="Tipo de comida (opcional)"
        value={comida}
        onChangeText={setComida}
      />
      <TextInput
        style={styles.input}
        placeholder="Ciudad"
        value={ciudad}
        onChangeText={setCiudad}
      />
      <Button title="Buscar" onPress={buscarRestaurantes} color="#1e90ff" />

      {loading && <ActivityIndicator size="large" color="#1e90ff" style={{ marginTop: 20 }} />}

      <ScrollView style={{ marginTop: 20 }}>
        {restaurantes.map((r, i) => (
          <View key={i} style={styles.card}>
            <Text style={styles.name}>{r.tags.name || 'Sin nombre'}</Text>
            <Text>🍴 Comida: {r.tags.cuisine || 'Desconocida'}</Text>
            <Text>📍 Dirección: {r.tags['addr:full'] || r.tags['addr:street'] || 'No disponible'}</Text>
            <Text>🌐 Coordenadas: {r.lat?.toFixed(4) || r.center?.lat?.toFixed(4)}, {r.lon?.toFixed(4) || r.center?.lon?.toFixed(4)}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 50, backgroundColor: '#fefefe' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderColor: '#ddd',
    borderWidth: 1,
    shadowColor: '#aaa',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  name: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
});