import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NativeBaseProvider} from 'native-base';
import PlayScreen from './Screens/PlayScreen';
import PushScreen from './Screens/PushScreen';
import SplashScreen from './Screens/SplashScreen';
import HomeScreen from './Screens/HomeScreen';
import Demo from './Screens/Demo';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function SplashStackNavigation() {
  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Splash" headerMode="none">
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen
              name="Home"
              component={TabNavigator}
              options={{animationEnabled: false, gestureEnabled: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Play" component={PlayScreen} />
      <Stack.Screen name="Push" component={PushScreen} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Demo" component={Demo} />
    </Tab.Navigator>
  );
};

export default function App() {
  return <SplashStackNavigation />;
}
