import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-community/async-storage';
import BottomNav from './src/screens/BottomNav';
import theme from './src/core/theme';
import LoginScreen from './src/screens/Login';
import RegisterScreen from './src/screens/Register';
import { getUserData } from './src/services/user';
import { selectIsLoggedIn, setUserData } from './src/store/slices/auth-slice';
import SplashScreen from './src/components/SplashScreen';

const Stack = createNativeStackNavigator();

const AppRoute = () => {

    const isLoggedIn = useSelector(selectIsLoggedIn);
    const [isLoading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        AsyncStorage.getItem('@DoeSangue:token').then((token) => {
            setLoading(false);
            if(token) {
                getUserData(token).then((data: any) => {
                    dispatch(setUserData({...data, accessToken: token}))
                }).catch((err) => {
                    AsyncStorage.removeItem('@DoeSangue:token');
                })
            }
        })
    }, [])

    if(isLoading) return <SplashScreen />

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