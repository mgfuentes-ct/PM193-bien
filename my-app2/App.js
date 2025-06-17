/* Zona 1: lugar de las importaciones*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {act, useState} from 'react';

const Texto = ({style, contenido}) => {
  return (
    <Text style={[styles.text,style]}>{contenido}</Text>
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
      <Texto style={styles.amarillo} contenido={contenido}></Texto>
      <Texto style={styles.rojo} contenido={contenido}></Texto>
      <Texto style={styles.verde} contenido={contenido}></Texto>
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
    justifyContent: 'space-evenly',
    flexDirection: 'space-between',
  },
  text: {
    color: 'black',
    fontSize: 28,
  }, 
  rojo:{backgroundColor: 'red'},
  amarillo:{backgroundColor: 'yellow'},
  verde:{backgroundColor: 'green'},

});
