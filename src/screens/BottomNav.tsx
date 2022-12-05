import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './Home';
import UserScreen from './User';
import ScheduleScreen from './Schedule';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createMaterialBottomTabNavigator();

const BottomNav = () => {

  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
            tabBarLabel: 'Início',
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="home" color={color} size={26} />
            ),
        }}
        name="Home" component={HomeScreen} />
      <Tab.Screen
        options={{
          tabBarLabel: 'Agendamentos',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="schedule" color={color} size={26} />
          ),
        }}
        name="Schedule" component={ScheduleScreen} />
      <Tab.Screen
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="person" color={color} size={26} />
          ),
        }}
        name="Settings" component={UserScreen} />
    </Tab.Navigator>
  );
};

export default BottomNav;
