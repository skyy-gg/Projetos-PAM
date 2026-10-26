import { NavigationContainer } from "@react-navigation/native";
import Ver from "./fonte/telas/Ver";
import Criar from "./fonte/telas/Criar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Clientes" component={Ver} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro" component={Criar} options={{ title: 'Cadastrar Cliente', headerStyle: { backgroundColor: '#3355aa' }, headerTintColor: '#fff' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};