/* Zona 1: lugar de las importaciones*/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

const Texto = (props) => {
  const {children} = props;
  return (
    <Text>{children}</Text>
  );
}


/* Zona 2: Es un tipo Main (zona de ejecución) */
export default function App() {
  return (
    <View style={styles.container}> 
      <Texto >Hola</Texto>
      <Texto >Mundo</Texto>
      <Texto >React Native</Texto>
      <Texto >:p</Texto>
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
