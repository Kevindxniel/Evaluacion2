import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../config/config'; // Asegúrate de importar correctamente tu configuración de Firebase
import { ref } from 'firebase/database';

export default function RegistroScreen({ navigation }: any) {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');
    const [contrasenia, setContrasenia] = useState('');

    function registro() {
        createUserWithEmailAndPassword(auth, correo, contrasenia)
        .then((userCredential) => {
            const user = userCredential.user;


            db.ref('usuarios/' + user.uid).set({
                nombre: nombre,
                apellido: apellido,
                correo: correo,
            })
            .then(() => {
                console.log('Usuario registrado correctamente en Realtime Database');
                navigation.navigate('Login');
            })
            .catch((error) => {
                console.error('Error al registrar usuario en Realtime Database: ', error);
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            // Manejar errores de registro
        });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>REGISTRO</Text>

            <TextInput
                style={styles.input}
                placeholder='Ingresa tu nombre'
                onChangeText={(texto) => setNombre(texto)}
            />

            <TextInput
                style={styles.input}
                placeholder='Ingresa tu apellido'
                onChangeText={(texto) => setApellido(texto)}
            />

            <TextInput
                style={styles.input}
                placeholder='Ingresa tu correo electrónico'
                onChangeText={(texto) => setCorreo(texto)}
                keyboardType='email-address'
            />

            <TextInput
                style={styles.input}
                placeholder='Ingresa contraseña'
                onChangeText={(texto) => setContrasenia(texto)}
                secureTextEntry={true}
            />

            <Button title='Registrarse' onPress={() => registro()} />

            <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
                Ya tengo una cuenta. Iniciar sesión
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 30,
        marginBottom: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    link: {
        marginTop: 20,
        color: '#007bff',
        textDecorationLine: 'underline',
    },
});
