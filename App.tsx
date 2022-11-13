import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import BottomNav from './src/screens/BottomNav';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name="BottomNav" component={BottomNav} />
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}

export default App;