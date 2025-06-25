import React  from "react";
import { View, Text, Image, StyleSheet, SafeAreaView, ImageBackground } from "react-native";

const HomeScreen = () => {
  return (
    <ImageBackground
        source={require('C:/Users/maria/OneDrive/Documentos/9 cuatri/PM193/PM193-bien/my-app2/src/assets/490a8d688aa6696311f33ebc258979c5.jpg')} style={styles.background}>
        <SafeAreaView style={styles.content}>
            <Text style={styles.text}>Pantalla pricipal</Text>
        </SafeAreaView>
    </ImageBackground>
  ); 
};

export default HomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    
  },
  content: {
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold'
  }
});

