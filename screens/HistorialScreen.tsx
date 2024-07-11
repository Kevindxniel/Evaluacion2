import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { db } from '../config/config'; 

const HistorialScreen = () => {
  const [operaciones, setOperaciones] = useState([]);

  useEffect(() => {
    // Lógica para obtener las operaciones desde Firebase
    const fetchOperaciones = async () => {
      const operacionesSnapshot = await db.collection('operaciones').get();
      const operacionesList = operacionesSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setOperaciones(operacionesList);
    };

    fetchOperaciones();
  }, []);

  const handleSelectOperacion = (comentario) => {
    Alert.alert('Comentario', comentario);
  };

  return (
    <View style={{ padding: 16 }}>
      <FlatList
        data={operaciones}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleSelectOperacion(item.comentario)}>
            <View style={{ padding: 16, borderBottomWidth: 1 }}>
              <Text>Monto: {item.monto}</Text>
              <Text>Comentario: {item.comentario}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HistorialScreen;
