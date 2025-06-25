import React  from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('C:/Users/maria/OneDrive/Documentos/9 cuatri/PM193/PM193-bien/my-app2/src/assets/GrfaDWWWEAERcAZ.jpeg')} 
        style={styles.logo}
        resizeMode="contain"/>
        <Text style={styles.title}>
            Bienvenido a la App
        </Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200
  },
  title: {
    marginTop: 20,
    color: '#eeeeee',
    fontSize: 24,
    fontWeight: 'bold'
  }
});

