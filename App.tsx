import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNav from './screens/BottomNav';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BottomNav" component={BottomNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;