/* Zona 1: lugar de las importaciones*/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {act, useState} from 'react';

const Texto = ({contenido}) => {
  return (
    <Text>{contenido}</Text>
  );
}


/* Zona 2: Es un tipo Main (zona de ejecución) */
export default function App() {
  const [contenido, setContenido] = useState('Hola Mundo');
  const actualizaTexto = () => {  
    setContenido('Estdo modificado');
  }
  return (
    <View style={styles.container}> 
      <Texto contenido={contenido}></Texto>
      <Texto contenido={contenido}></Texto>
      <Texto contenido={contenido}></Texto>
      <Button title='Presionar' onPress={actualizaTexto}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

/* Zona 3: lugar de los estilos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
