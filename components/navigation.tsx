/* import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../screens/Home';
import Settings from '../screens/Settings';
import Stats from '../screens/Stats';
import Lab from '../screens/Lab';

const Tab = createBottomTabNavigator();

//Poner splash screen value
const SIGN_IN_TO_APP = 0;
const PLAYER_LOGGED = 1;
const ERROR_LOGGIN = 2;

const Navigation = () => {
  return (
    <>
      {actualState === SIGN_IN_TO_APP ? (
        <Login />
      ) : actualState === PLAYER_LOGGED ? (
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                  iconName = 'home';
                } else if (route.name === 'Settings') {
                  iconName = 'settings';
                } else if (route.name === 'Stats') {
                  iconName = 'stats-chart';
                } else if (route.name === 'Lab') {
                  iconName = 'flask';
                }
                return <Ionicons name={iconName} color={color} size={20} />;
              },
            })}
          >
            <Tab.Screen
              options={{ headerShown: false }}
              name="Home"
              component={Home}
            />
            <Tab.Screen
              options={{ headerShown: false }}
              name="Settings"
              component={Settings}
            />
            <Tab.Screen
              options={{ headerShown: false }}
              name="Stats"
              component={Stats}
            />
            <Tab.Screen
              options={{ headerShown: false }}
              name="Lab"
              component={Lab}
            />
          </Tab.Navigator>
        </NavigationContainer>
      ) : (
        false
      )}
    </>
  );
};

export default Navigation;
 */
