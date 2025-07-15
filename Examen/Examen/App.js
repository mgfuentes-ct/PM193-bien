import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  Input,
  Button,
  Card,
  Avatar,
  Divider,
  Overlay,
  Icon,
} from '@rneui/themed';
import axios from 'axios';
import { VQV3EVMHWDAGLLYQDCMLKS2YXVM0FK1AYDXQID3O1XOFSYI2 } from '@env';

export default function App() {
  const [ciudad, setCiudad] = useState('');
  const [comida, setComida] = useState('');
  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(false);
  const [detalleVisible, setDetalleVisible] = useState(false);
  const [restauranteSeleccionado, setRestauranteSeleccionado] = useState(null);

  const buscarRestaurantes = async () => {
    if (!ciudad || !comida) return;

    setLoading(true);
    try {
      const res = await axios.get('https://api.foursquare.com/v3/places/search ', {
        params: {
          query: comida,
          near: ciudad,
          sort: 'RELEVANCE',
        },
        headers: {
          Authorization: VQV3EVMHWDAGLLYQDCMLKS2YXVM0FK1AYDXQID3O1XOFSYI2,
          Accept: 'application/json',
        },
      });

      setResultados(res.data.results || []);
    } catch (e) {
      console.error(e.response?.data || e.message);
    } finally {
      setLoading(false);
    }
  };

  const mostrarDetalles = (restaurante) => {
    setRestauranteSeleccionado(restaurante);
    setDetalleVisible(true);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>🍽️ Busca Restaurantes</Text>

      <Input
        placeholder="Ciudad (ej: Guadalajara)"
        value={ciudad}
        onChangeText={setCiudad}
        inputContainerStyle={styles.input}
        leftIcon={<Icon type="MaterialIcons" name="location-city" />}
      />

      <Input
        placeholder="Tipo de comida (ej: sushi)"
        value={comida}
        onChangeText={setComida}
        inputContainerStyle={styles.input}
        leftIcon={<Icon type="MaterialIcons" name="restaurant" />}
      />

      <Button
        title="Buscar"
        onPress={buscarRestaurantes}
        loading={loading}
        buttonStyle={styles.boton}
        icon={<Icon name="search" type="MaterialIcons" color="#fff" />}
      />

      {loading && <ActivityIndicator size="large" color="#007AFF" />}

      {!loading &&
        resultados.length === 0 &&
        ciudad &&
        comida && <Text style={styles.noResultados}>No se encontraron restaurantes.</Text>}

      {resultados.map((r, index) => (
        <TouchableOpacity key={index} onPress={() => mostrarDetalles(r)}>
          <Card containerStyle={styles.tarjeta}>
            <View style={styles.tarjetaContenido}>
              {r.photos && r.photos[0] ? (
                <Avatar
                  source={{
                    uri: r.photos[0].prefix + 'width500',
                  }}
                  size={80}
                  rounded
                />
              ) : (
                <Avatar
                  icon={{ type: 'MaterialIcons', name: 'restaurant' }}
                  size={80}
                  rounded
                  containerStyle={{ backgroundColor: '#ddd' }}
                />
              )}

              <View style={styles.info}>
                <Text style={styles.nombre}>{r.name}</Text>
                <Text style={styles.subInfo}>
                  ⭐ {r.rating || 'N/A'} • {(r.distance / 1000).toFixed(2)} km
                </Text>
              </View>
            </View>
          </Card>
        </TouchableOpacity>
      ))}

      {/* Ventana modal para detalles */}
      <Overlay isVisible={detalleVisible} onBackdropPress={() => setDetalleVisible(false)}>
        {restauranteSeleccionado && (
          <View style={styles.modal}>
            <Text style={styles.modalTitulo}>{restauranteSeleccionado.name}</Text>
            <Divider />

            {restauranteSeleccionado.photos && (
              <Image
                source={{
                  uri: restauranteSeleccionado.photos[0]?.prefix + 'width500',
                }}
                style={styles.modalImagen}
              />
            )}

            <Text style={styles.modalTexto}>
              📍 Dirección: {restauranteSeleccionado.location.address || 'No disponible'}
            </Text>
            <Text style={styles.modalTexto}>
              📞 Teléfono: {restauranteSeleccionado.contact?.phone || 'No disponible'}
            </Text>
            <Text style={styles.modalTexto}>
              🗣️ Reseñas: {restauranteSeleccionado.tips_count || 0}
            </Text>

            <Button
              title="Cerrar"
              onPress={() => setDetalleVisible(false)}
              type="outline"
              buttonStyle={styles.botonCerrar}
            />
          </View>
        )}
      </Overlay>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#007AFF',
  },
  input: {
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: '#ccc',
  },
  boton: {
    backgroundColor: '#007AFF',
    borderRadius: 10,
    marginVertical: 10,
  },
  noResultados: {
    textAlign: 'center',
    marginTop: 20,
    color: '#999',
  },
  tarjeta: {
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
  },
  tarjetaContenido: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    marginLeft: 15,
  },
  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subInfo: {
    fontSize: 14,
    color: '#666',
  },
  modal: {
    padding: 20,
    width: '100%',
    maxWidth: 400,
    maxHeight: 500,
    borderRadius: 10,
  },
  modalTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalTexto: {
    marginVertical: 5,
    fontSize: 14,
  },
  modalImagen: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    marginVertical: 10,
  },
  botonCerrar: {
    marginTop: 10,
    borderColor: '#007AFF',
    borderRadius: 10,
  },
});