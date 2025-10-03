import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import Stats from '../screens/Stats';
import Lab from '../screens/Lab';

const Tab = createBottomTabNavigator();

type NavigationProps = {
  setActualState(state: number): void;
  setUser: any;
};

const Navigation = ({ setActualState, setUser }: NavigationProps) => {
  return (
    <>
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
          <Tab.Screen options={{ headerShown: false }} name="Settings">
            {() => (
              <Settings setActualState={setActualState} setUser={setUser} />
            )}
          </Tab.Screen>
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
    </>
  );
};

export default Navigation;
