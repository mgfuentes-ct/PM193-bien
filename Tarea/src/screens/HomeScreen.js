import React, { useState } from 'react';
import { View, Text, TextInput, Switch, TouchableOpacity, Alert, ImageBackground, SafeAreaView, } from 'react-native';
import { StatusBar } from 'expo-status-bar';


const HomeScreen = () => {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [aceptaTerminos, setAceptaTerminos] = useState(false);
    const [errorNombre, setErrorNombre] = useState('');
    const [errorCorreo, setErrorCorreo] = useState('');
    
    const isValidEmail = (email) => { const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        return regex.test(email);
    };

    const handleRegistrar = () => { let valid = true;
         // Validar nombre
        if (!nombre.trim()) {
        Alert.alert('Error', 'El nombre es obligatorio.');
        valid = false;
        }

        // Validar correo
        if (!correo.trim()) {
        Alert.alert('Error', 'El correo electrónico es obligatorio.');
        valid = false;
        } else if (!isValidEmail(correo)) {
        Alert.alert('Error', 'Correo electrónico inválido.');
        valid = false;
        }

        // Validar términos
        if (!aceptaTerminos) {
        Alert.alert('Error', 'Debes aceptar los términos y condiciones.');
        valid = false;
        }

        // Si todo es válido
        if (valid) {
        Alert.alert(
            'Registro exitoso',
            `Nombre: ${nombre}\nCorreo: ${correo}`,
            [{ text: 'OK' }]
        );

        // Limpiar campos
        setNombre('');
        setCorreo('');
        setAceptaTerminos(false);
        }
  };


  return (
  <ImageBackground
    source={require('C:/Users/maria/OneDrive/Documentos/9 cuatri/PM193/PM193-bien/Tarea/src/assets/fondo1.jpg')}
    style={{ flex: 1 }}
  >
    <SafeAreaView style={styles.content}>
      <View style={styles.formContainer}>
        <Text style={styles.titulo}>Registro de Usuario</Text>

        {/* Nombre */}
        <Text style={styles.text}>Nombre:</Text>
        <TextInput
          placeholder="Ingresa tu nombre"
          value={nombre}
          onChangeText={(text) => { const regex = /^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]*$/; 
            if (regex.test(text)) { setNombre(text);}}} style={styles.input}
        />

        {/* Correo */}
        <Text style={styles.text}>Correo:</Text>
        <TextInput
          placeholder="ejemplo@correo.com"
          keyboardType="email-address"
          autoCapitalize="none"
          value={correo}
          onChangeText={(text) => setCorreo(text)}
          style={styles.input}
        />

        {/* Términos */}
        <View style={styles.switchContainer}>
          <Switch value={aceptaTerminos} onValueChange={setAceptaTerminos} />
          <Text style={styles.text2}>Aceptar términos y condiciones</Text>
        </View>

        {/* Botón */}
        <TouchableOpacity onPress={handleRegistrar} style={styles.button}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  </ImageBackground>
);
};

export default HomeScreen;

const styles = {
  background: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center', // Centra verticalmente
    alignItems: 'center',      // Centra horizontalmente
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 20,
    borderRadius: 10,
    width: '90%',   // Ancho controlado
    maxWidth: 400,  // Máximo ancho para pantallas grandes
    alignItems: 'center',
  },
  titulo: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  text: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginTop: 10,
  },
  input: {
    width: '100%',

    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  
  text2: {
    marginLeft: 10,
    fontSize: 16,
    color: 'black',
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
};