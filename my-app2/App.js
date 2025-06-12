/* Zona 1: lugar de las importaciones*/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

const Texto = (props) => {
  const {contenido} = props;
  return (
    <Text>{contenido}</Text>
  );
}


/* Zona 2: Es un tipo Main (zona de ejecución) */
export default function App() {
  return (
    <View style={styles.container}> 
      <Texto contenido="Hola"></Texto>
      <Texto contenido="Mundo"></Texto>
      <Texto contenido="ReactNative"></Texto>
      <Texto contenido=":)"></Texto>
      <Button title='Presionar'></Button>
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
