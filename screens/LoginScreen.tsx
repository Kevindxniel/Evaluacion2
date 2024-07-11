import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/config';

export default function LoginScreen({ navigation }: any) {

  const [correo, setCorreo] = useState('');
  const [contrasenia, setContrasenia] = useState('');

  function login() {
    signInWithEmailAndPassword(auth, correo, contrasenia)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigation.navigate('HomeTab');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        let titulo = "";
        let mensaje = "";

        if (errorCode === 'auth/wrong-password') {
          titulo = "Error de contraseña";
          mensaje = "La contraseña es incorrecta";
        } else if (errorCode === 'auth/user-not-found') {
          titulo = "Usuario no encontrado";
          mensaje = "No se encontró ninguna cuenta con este correo electrónico";
        } else if (errorCode === 'auth/invalid-email') {
          titulo = "Error de correo";
          mensaje = "El correo electrónico es inválido";
        } else {
          titulo = "Error";
          mensaje = "Ocurrió un error inesperado. Por favor, inténtalo de nuevo más tarde.";
        }

        Alert.alert(titulo, mensaje);
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>

      <TextInput
        style={styles.input}
        placeholder='Correo electrónico'
        onChangeText={(texto) => setCorreo(texto)}
        keyboardType='email-address'
        autoCapitalize='none'
      />
      <TextInput
        style={styles.input}
        placeholder='Contraseña'
        onChangeText={(texto) => setContrasenia(texto)}
        secureTextEntry={true}
        autoCapitalize='none'
      />

      <TouchableOpacity style={styles.button} onPress={() => login()}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.link}>¿No tienes cuenta? Regístrate aquí</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#ffffff', // Fondo blanco
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333', // Color de texto oscuro
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#f0f0f0', // Fondo gris claro
    marginBottom: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007bff', // Azul brillante
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff', // Texto blanco
    fontWeight: 'bold',
  },
  link: {
    marginTop: 20,
    color: '#007bff', // Azul brillante
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
