import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Config from './fonte/telas/Config';
import Inicial from './fonte/telas/Inicial';
import Usuario from './fonte/telas/Usuario';

import AntDesign from '@expo/vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Inicial" component={Inicial}/>
          <Tab.Screen name="Configurações" component={Config}/>
          <Tab.Screen name="Usuario" component={Usuario}/>
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}
