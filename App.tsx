import Login from './components/login';
import Splash from './components/splash';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import { MaterialCommunityIcons } from '@expo/vector-icons';


import Home from './screens/Home';
import Settings from './screens/Settings';
import Stats from './screens/Stats';
import Lab from './screens/Lab';
import Error from './screens/Error';
import { ScrollView } from 'react-native';


const Tab = createBottomTabNavigator();

const SIGN_IN_TO_APP = 0;
const PLAYER_LOGGED = 1;
const ERROR_LOGGIN = 2;

function App() {
  const [actualState, setActualState] = useState(0);


  return (
    <>
      {
        (actualState === SIGN_IN_TO_APP) ?
          <Login />
          : (actualState === PLAYER_LOGGED) ?
            <NavigationContainer>
              <Tab.Navigator>
                <Tab.Screen name="Login" component={Login} />
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Settings" component={Settings} />
                <Tab.Screen name="Stats" component={Stats} />
                <Tab.Screen name="Lab" component={Lab} />
              </Tab.Navigator>
            </NavigationContainer>
            : (actualState === ERROR_LOGGIN) ?
              // Pantalla de error
              <Error />
              : false
      }
    </>
  );
}

export default App;
