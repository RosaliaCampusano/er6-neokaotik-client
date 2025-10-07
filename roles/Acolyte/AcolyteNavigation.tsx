import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './components/Home';
import Settings from './components/Settings';
import Lab from './components/Laboratory';
import React from 'react';

const Tab = createBottomTabNavigator();

const AcolyteNavigation = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName: string = '';

              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name === 'Settings') {
                iconName = 'settings';
              } else if (route.name === 'Stats') {
                iconName = 'stats-chart';
              } else if (route.name === 'Lab') {
                iconName = 'flask';
              }
              return <Ionicons name={iconName} color="#213d39" size={20} />;
            },
            tabBarStyle: {
              backgroundColor: '#0a171e',
              borderColor: '#333',
            },
            tabBarInactiveTintColor: '#345550',
            tabBarActiveTintColor: '#6baaa4ff',
          })}
        >
          <Tab.Screen
            options={{ headerShown: false }}
            name="Home"
            component={Home}
          />
          <Tab.Screen
            options={{ headerShown: false }}
            name="Lab"
            component={Lab}
          />
          <Tab.Screen
            options={{ headerShown: false }}
            name="Settings"
            component={Settings}
          ></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default AcolyteNavigation;
