import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import BottomNav from './src/BottomNav';
import theme from './src/core/theme';
import LoginScreen from './src/screens/Login';
import RegisterScreen from './src/screens/Register';
import {useSelector} from 'react-redux';
import { selectIsLoggedIn } from './src/store/slices/auth-slice';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AppRoute = () => {

    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <NavigationContainer>
            <PaperProvider theme={theme}>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    {!isLoggedIn ?  (
                    <Stack.Group>
                        <Stack.Screen name="Login" component={LoginScreen} />
                        <Stack.Screen name="Register" component={RegisterScreen} />
                    </Stack.Group>
                    ) : (
                    <Stack.Group>
                        <Stack.Screen name="BottomNav" component={BottomNav} />
                    </Stack.Group>
                    )}
                </Stack.Navigator>
            </PaperProvider>
        </NavigationContainer>
    )
}

export default AppRoute