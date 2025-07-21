import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DrinkLogProvider } from './context/DrinkLogContext';
import Home from './screens/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <DrinkLogProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'DrinkSync 🍻' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </DrinkLogProvider>
  );
}
