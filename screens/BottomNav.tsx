import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Home';
import SettingsScreen from './Settings';
import ScheduleScreen from './Schedule';

const Tab = createBottomTabNavigator();

const BottomNav = () => {

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Schedule" component={ScheduleScreen} />
    </Tab.Navigator>
  );
};

export default BottomNav;
