import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import OperacionesScreen from '../screens/MontoScreen';
import HistorialScreen from '../screens/HistorialScreen';
import PerfilScreen from '../screens/PerfilScreen';
// import HomeScreen from '../screens/HomeScreen';
// import ProfileScreen from '../screens/ProfileScreen';
// import OperationsScreen from '../screens/OperationsScreen';
// import HistoryScreen from '../screens/HistoryScreen';

const Tab = createBottomTabNavigator();

 export default function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Monto" component={OperacionesScreen} />
      <Tab.Screen name="History" component={HistorialScreen} /> 
     <Tab.Screen name="Perfil" component={PerfilScreen} /> 
    </Tab.Navigator>
  );
}
