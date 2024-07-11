import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import db, { auth } from '../config/config';


const PerfilScreen = ({ navigation } : any) => {
  const [user, setUser] = useState(null);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      setUser(user);

      const productosSnapshot = await db.collection('productos').get();
      const productosList = productosSnapshot.docs.map(doc => doc.data());
      setProductos(productosList);
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    auth.signOut().then(() => {
      navigation.navigate('Welcome');
    });
  };

  return (
    <View style={{ padding: 16 }}>
      {user && (
        <>
          <Text>Correo: {user.email}</Text>
          <Text>Mis Productos:</Text>
          <FlatList
            horizontal
            data={productos}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={{ margin: 8, padding: 16, borderWidth: 1 }}>
                <Text>{item.tipo}</Text>
              </View>
            )}
          />
          <Button title="Cerrar Sesión" onPress={handleLogout} />
        </>
      )}
    </View>
  );
};

export default PerfilScreen;