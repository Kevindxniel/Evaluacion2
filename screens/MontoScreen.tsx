import React, { useState, useCallback, useMemo } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const OperacionesScreen = () => {
  const [monto, setMonto] = useState('');
  const [comentario, setComentario] = useState('');

  const handleOperacion = useCallback(() => {
    const montoFloat = useMemo(() => parseFloat(monto), [monto]);

    if (montoFloat > 500) {
      Alert.alert('Error', 'No se permiten transacciones mayores a $500');
      return;
    }

    if (montoFloat < 5) {
      Alert.alert(
        'Monto Bajo',
        'El monto ingresado es menor a $5. ¿Desea continuar?',
        [
          { text: 'Cancelar', style: 'cancel' },
          { text: 'Aceptar', onPress: () => guardarOperacion() }
        ]
      );
      return;
    }

    guardarOperacion();
  }, [monto]);

  const guardarOperacion = useCallback(() => {
    // Lógica para guardar la operación
    Alert.alert('Operación Exitosa', 'La operación se registró correctamente');
  }, []);

  return (
    <View style={{ padding: 16 }}>
      <Text>Monto:</Text>
      <TextInput
        value={monto}
        onChangeText={setMonto}
        placeholder="Ingrese el monto"
        keyboardType="numeric"
        style={{ borderBottomWidth: 1, marginBottom: 12 }}
      />
      <Text>Comentario:</Text>
      <TextInput
        value={comentario}
        onChangeText={setComentario}
        placeholder="Ingrese un comentario"
        style={{ borderBottomWidth: 1, marginBottom: 12 }}
      />
      <Button title="Registrar Operación" onPress={handleOperacion} />
    </View>
  );
};

export default OperacionesScreen;