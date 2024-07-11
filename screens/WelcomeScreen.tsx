// screens/WelcomeScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const WelcomeScreen = ({ navigation }: any) => {
  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido !!</Text>
      <Image source={require('../assets/Welcome.jpg')} style={styles.Image} />
      <View style={styles.buttonContainer}>
        <Button title="Iniciar sesión" onPress={handleLogin} />
      </View>
      <View style={styles.buttonContainer}>
      <Button title="Registrarse" onPress={handleRegister} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000',
    },
    Image: {
      width: 400,
      height: 200,
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 36,
      fontWeight: 'bold',
      color: '#fff',
      textAlign: 'center',
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 5,
    },
    buttonContainer: {
      marginTop: 40,
      width: '80%',
    },
  })


export default WelcomeScreen;
