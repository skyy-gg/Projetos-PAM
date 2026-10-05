import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Config from './fonte/telas/Config';
import Inicial from './fonte/telas/Inicial';
import Usuario from './fonte/telas/Usuario';

import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{tabBarActiveTintColor: 'tomato', tabBarInactiveTintColor: 'darkblue'}}>
        <Tab.Screen name="Inicial" component={Inicial} options={{tabBarIcon: (props) => <Ionicons name="home" size={props.size} color={props.color} />}}/>
        <Tab.Screen name="Configurações" component={Config} options={{tabBarIcon: (props) => <Ionicons name="settings" size={props.size} color={props.color} />}}/>
        <Tab.Screen name="Usuario" component={Usuario} options={{tabBarIcon: (props) => <AntDesign name="aim" size={props.size} color={props.color} />}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
