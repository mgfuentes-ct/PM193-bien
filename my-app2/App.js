// Importamos los módulos necesarios de React y React Native
import { use } from 'react';
import React, { useRef } from 'react';
import {
  ScrollView, // Para hacer el contenido desplazable
  StatusBar // Para acceder a la altura de la barra de estado
  ,

  StyleSheet, // Para crear estilos
  Text
} from 'react-native';

// Importamos SafeAreaView y SafeAreaProvider para respetar las áreas seguras del dispositivo
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// Componente principal de la aplicación
const App = () => {

return (

  // SafeAreaProvider es necesario para que SafeAreaView funcione correctamente
  <SafeAreaProvider>
    {/* SafeAreaView asegura que el contenido no se superponga con la barra de estado, muescas, etc. */}
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* ScrollView permite que el contenido sea desplazable si excede el alto de la pantalla */}
      <ScrollView horizontal={true} >
      <ScrollView style={styles.scrollView}>
        {/* Texto largo para probar el scroll */}
        <Text style={styles.text}>
          Este es el texto que ocupara todo el espacio 
          para que podamos ver el espacio que ocupe el scrollView.
          Este es el texto que ocupara todo el espacio 
          para que podamos ver el espacio que ocupe el scrollView.
          Este es el texto que ocupara todo el espacio 
          para que podamos ver el espacio que ocupe el scrollView.
          Este es el texto que ocupara todo el espacio 
          para que podamos ver el espacio que ocupe el scrollView.
          Este es el texto que ocupara todo el espacio 
          para que podamos ver el espacio que ocupe el scrollView.
          Este es el texto que ocupara todo el espacio 
          para que podamos ver el espacio que ocupe el scrollView.
          Este es el texto que ocupara todo el espacio 
          para que podamos ver el espacio que ocupe el scrollView.
          Este es el texto que ocupara todo el espacio 
          para que podamos ver el espacio que ocupe el scrollView.
          Este es el texto que ocupara todo el espacio 
          para que podamos ver el espacio que ocupe el scrollView.
          Este es el texto que ocupara todo el espacio 
          para que podamos ver el espacio que ocupe el scrollView.
          Este es el texto que ocupara todo el espacio 
          para que podamos ver el espacio que ocupe el scrollView.
          Este es el texto que ocupara todo el espacio 
          para que podamos ver el espacio que ocupe el scrollView.
          Este es el texto que ocupara todo el espacio 
          para que podamos ver el espacio que ocupe el scrollView.
          Este es el texto que ocupara todo el espacio 
          para que podamos ver el espacio que ocupe el scrollView.
          Este es el texto que ocupara todo el espacio 
          para que podamos ver el espacio que ocupe el scrollView.
        </Text>
      </ScrollView>
      </ScrollView>
    </SafeAreaView>
  </SafeAreaProvider>
);
}
// Definimos los estilos con StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,                             // Ocupa todo el alto disponible de la pantalla
    paddingTop: StatusBar.currentHeight // Evita que el contenido se solape con la barra de estado
  },
  scrollView: {
    backgroundColor: 'pink',            // Fondo rosa para visualizar el área del ScrollView
  },
  text: {
    fontSize: 42,                        // Texto grande
    padding: 12,                         // Espaciado interno
  },
});

// Exportamos el componente para que pueda ser usado por la app
export default App;